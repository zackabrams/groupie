

var SlackBot = require('slackbots');

// create a bot
const envKey = process.env.token
var bot = new SlackBot({
  token: envKey,
  name: 'groupie'
})


bot.on('start', function(data) {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':robot_face:'
        link_names: 'true'
    };

    // define channel, where bot exist. You can adjust it there https://my.slack.com/services
    bot.postMessageToChannel('shhhhtesting', "Hello! I'm starting. Did something go wrong? @zackbot", params);

    channellist = bot.getChannels();

});

bot.on('message', function(data) {
    var params = {
        icon_emoji: ':robot_face:'
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

        messagetext = "Beep Boop! Hey @ board @zackbot! "+username+" summoned you, saying:"+data.text.replace("@board","");
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

        messagetext = "Beep Boop! Hey @ dailies! "+username+" summoned you, saying:"+data.text.replace("@dailies","");
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

        messagetext = "Beep Boop! Hey @ social media team! "+username+" summoned you, saying:"+data.text.replace("@social","");
        bot.postMessageToChannel(channelname, messagetext, params);
        return;
    };
});
