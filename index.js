var builder = require('botbuilder'); 
var apiairecognizer = require('api-ai-recognizer');
var connector = new builder.ConsoleConnector().listen(); 
var bot = new builder.UniversalBot(connector); 

var recognizer = new apiairecognizer('c16b8d5d22b3429d87eeb727cfd8c824');

var intents = new builder.IntentDialog({ recognizers: [recognizer] }); 


bot.dialog('/',intents); 


intents.matches('testIntent',function(session){ 
    session.send("It's 27 degrees celsius"); 
}); 

intents.onDefault(function(session){ 
    session.send("Sorry...can you please rephrase?"); 
});