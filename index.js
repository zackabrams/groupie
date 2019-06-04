
var SlackBot = require('slackbots');
var fs = require('fs');

// create a bot
const token1 = process.env.BWOGTOKEN
console.log(token1);
var bot = new SlackBot({
  token: token1,
  name: 'groupie'
});


bot.on('start', function(data) {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':robot_face:',
        link_names: 'true'
    };
  daataa = bot.getUsers()._value.members
  fs.writeFile('Output.txt', JSON.stringify(daataa), function (err) {
  if (err) throw err;
  console.log('Saved!');
});
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services
    bot.postMessageToChannel('shhhhtesting', "Hello! I'm starting.", params);

    channellist = bot.getChannels();

});

bot.on('message', function(data) {
    var params = {
        icon_emoji: ':robot_face:',
        link_names: 'true'
    };

    if (data.type === 'message' && data.text.includes('@board')) {
        userlist = bot.getUsers();
        userarray = userlist._value.members;
        obj1 = userarray.find(o => o.id === data.user);
        username = obj1.profile.first_name;

        chanellist = bot.getChannels();
        channelarray = channellist._value.channels;
        obj2 = channelarray.find(o => o.id === data.channel);
        console.log(obj2);
        channelname = obj2.name;

        messagetext = "Beep Boop! Hey board, <@U785MEX0V>, <@U7832H892>, <@U78EQEDD2>, <@UA43094KW>, <@UA4RB4SDU>! "+username+" summoned you, saying:"+data.text.replace("@board","");
        bot.postMessageToChannel(channelname, messagetext, params);
        return;
    };

    if (data.type === 'message' && data.text.includes('@dailies')) {
        userlist = bot.getUsers();
        userarray = userlist._value.members;
        obj1 = userarray.find(o => o.id === data.user);
        username = obj1.profile.first_name;

        chanellist = bot.getChannels();
        channelarray = channellist._value.channels;
        obj2 = channelarray.find(o => o.id === data.channel);
        console.log(obj2);
        channelname = obj2.name;

        messagetext = "Beep Boop! Hey dailies and deputies, <@UD0CKAYTH>, <@UCTUX5AD6>, <@UFX7SR7BP>, <@UCZ3XK76Y>, <@UCU3QTDFT>, <@UFKQT8G49>, <@UFWSWLKB6>, <@UCULW68G2>, <@UD0BU6FSB>! "+username+" summoned you, saying:"+data.text.replace("@dailies","");
        bot.postMessageToChannel(channelname, messagetext, params);
        return;
    };

    if (data.type === 'message' && data.text.includes('@social')) {
        userlist = bot.getUsers();
        userarray = userlist._value.members;
        obj1 = userarray.find(o => o.id === data.user);
        username = obj1.profile.first_name;

        chanellist = bot.getChannels();
        channelarray = channellist._value.channels;
        obj2 = channelarray.find(o => o.id === data.channel);
        console.log(obj2);
        channelname = obj2.name;

        messagetext = "Beep Boop! Hey social team, <@UD0KZERSA>, <@UD02MNUDR>, <@UCZ5HD85A>, and <@U7J4GSQTB>! "+username+" summoned you, saying:"+data.text.replace("@social","");
        bot.postMessageToChannel(channelname, messagetext, params);
        return;
    };

    if (data.type === 'message' && data.text.includes('@testing')) {
        userlist = bot.getUsers();
        userarray = userlist._value.members;
        obj1 = userarray.find(o => o.id === data.user);
        username = obj1.profile.first_name;

        chanellist = bot.getChannels();
        channelarray = channellist._value.channels;
        obj2 = channelarray.find(o => o.id === data.channel);
        console.log(obj2);
        channelname = obj2.name;

        messagetext = "This is a test <@"+data.user+">";
        bot.postMessageToChannel(channelname, messagetext, params);
        return;
    };

    if (data.type === 'message' && data.text.includes('@tech')) {
        userlist = bot.getUsers();
        userarray = userlist._value.members;
        obj1 = userarray.find(o => o.id === data.user);
        username = obj1.profile.first_name;

        chanellist = bot.getChannels();
        channelarray = channellist._value.channels;
        obj2 = channelarray.find(o => o.id === data.channel);
        console.log(obj2);
        channelname = obj2.name;

        messagetext = "Beep Boop! Hey tech team, <@UHZQ8NCG6>, <@UHVASG2MS>, and <@UHVRD36G4>! "+username+" summoned you, saying:"+data.text.replace("@tech","");
        bot.postMessageToChannel(channelname, messagetext, params);
        return;
    };
});
