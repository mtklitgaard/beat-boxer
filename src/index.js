var APP_ID = undefined;

var AlexaSkill = require('./AlexaSkill');

var Beat = function() {
    AlexaSkill.call(this, APP_ID);
};

Beat.prototype = Object.create(AlexaSkill.prototype);
Beat.prototype.constructor = Face;

Beat.prototype.eventHandlers.onLaunch = function(launchRequest, session, response) {
    handleBeatRequest(response);
};

Beat.prototype.intentHandlers = {
    "BeatBox": function(intent, session, response) {
        handleBeatRequest(response);
    },
    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say tell me to drop a beat, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Dropping the mic. Peace out, bro";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Cancel, say what?";
        response.tell(speechOutput);
    }
};

function handleBeatRequest(response) {
    var speechOutputForNow = "Yo yo yo, let's drop this beat";
    var cardTitle = "Your Beat";
    response.tellWithCard(speechOutputForNow, cardTitle);
}

exports.handler = function(event, context) {
    var beat = new Beat();
    beat.execute(event, context);
};