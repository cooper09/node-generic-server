signalr = require 'signalr-client'

API = require './api.js'
Config = require '../config.json'
Door = require './door.js'

class ProtectorNet
    authenticated: false

    constructor: () ->
        @signalR = new signalr.client "wss://" + Config.Server + "/rt/signalr", ['notificationHub'], 10, false

    login: () =>
        API.post "/auth", {userName: Config.UserName, password: Config.Password}, true
            .then (res) =>
                @authenticated = true
                # Once we've successfully authed, connect to real-time notification server
                @signalR.headers.cookie = res.headers['set-cookie'].join(';');
                @signalR.on 'notificationHub', 'notification', (notifications) =>
                    for notification in notifications
                        console.log notification
                @signalR.start()

                # Grab general information about server(Customer, Dealer, Licensing)
                API.get "/api/AuthDetails"
                    .then (res) =>
                        @customer = res

    logoff: () ->
        API.post "/auth/logout"
            .then (res) =>
                @authenticated = false

    getDoors: () ->
        API.get "/api/Doors"
            .then (res) =>
                throw res.ResponseStatus if res.ResponseStatus != null
                doors = []
                for doorInstance in res.Results
                    doors.push new Door(doorInstance)
                doors


module.exports = new ProtectorNet