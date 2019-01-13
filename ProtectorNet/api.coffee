request = require 'request-promise'
config = require '../config.json'

# Allows SSL to work with self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports = 
    get: (route, parameters) ->
        @apiCall "GET", route, parameters

    post: (route, parameters, fullResponse=false) ->
        @apiCall "POST", route, parameters, fullResponse

    apiCall: (method, route, parameters, fullResponse) ->
        request
            method: method
            uri: "https://" + config.Server + route
            crossDomain: true
            resolveWithFullResponse: fullResponse
            rejectUnauthorized: false
            body: parameters
            json: true
            jar: true
    