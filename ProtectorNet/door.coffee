API = require('./api.js')

class Door
    constructor: (@door) ->
        for key, value of @door
            @[key] = value

    pulseUnlock: () =>
        API.post '/api/PanelCommands/PulseDoor', DoorIds: [@Id], true

    override: (mode, type) =>
        API.post '/api/PanelCommands/OverrideDoor', { DoorIds: [@Id], TimeZoneMode: mode, OverrideType: type}

    resume: () =>
        API.post '/api/PanelCommands/ResumeDoor', DoorIds: [@Id], true

module.exports = Door