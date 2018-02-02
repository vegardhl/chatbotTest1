var builder = require('botbuilder'); 
var restify = require('restify');
var apiairecognizer = require('api-ai-recognizer'); 
var request = require('request'); 

var server = restify.createServer(); 

server.listen(process.env.port || process.env.PORT || 3978, function () { 
    console.log('%s listening to %s', server.name, server.url); 
}); 

var connector = new builder.ChatConnector({ 
    appId: '52028b33-32d4-4377-b336-530c28c9c604', 
    appPassword: 'uaucFKFKU6342hkaZY9$#%' 
});

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