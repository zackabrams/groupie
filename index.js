
var SlackBot = require('slackbots');
var fs = require('fs');

// create a bot
const token1 = process.env.BWOGTOKEN
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

        messagetext = "Beep Boop! Hey board, <@U782YPAR2>, <@UD0CN89D5>, <@UD0CKAYTH>, <@UA43094KW>, <@UA4RB4SDU>! "+username+" summoned you, saying:"+data.text.replace("@board","");
        bot.postMessageToChannel(channelname, messagetext, params);

    };

    if (data.type === 'message' && data.text.includes('@daily')) {
        userlist = bot.getUsers();
        userarray = userlist._value.members;
        obj1 = userarray.find(o => o.id === data.user);
        username = obj1.profile.first_name;

        chanellist = bot.getChannels();
        channelarray = channellist._value.channels;
        obj2 = channelarray.find(o => o.id === data.channel);
        console.log(obj2);
        channelname = obj2.name;

        var objToday = new Date(),
        	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
        	dayOfWeek = weekday[objToday.getDay()];

        console.log(dayOfWeek);
        console.log(objToday.toLocaleString())

        if(dayOfWeek == 'Monday') {
          messagetext = "Beep Boop! Hey Monday daily <@UN7AMR049>! "+username+" summoned you, saying:"+data.text.replace("@daily","");
          bot.postMessageToChannel(channelname, messagetext, params);

        }

        if(dayOfWeek == 'Tuesday') {
          messagetext = "Beep Boop! Hey Tuesday daily <@UN7AMPCJV>! "+username+" summoned you, saying:"+data.text.replace("@daily","");
          bot.postMessageToChannel(channelname, messagetext, params);

        }

        if(dayOfWeek == 'Wednesday') {
          messagetext = "Beep Boop! Hey Wednedsay daily <@UNDNUTM9T>! "+username+" summoned you, saying:"+data.text.replace("@daily","");
          bot.postMessageToChannel(channelname, messagetext, params);

        }

        if(dayOfWeek == 'Thursday') {
          messagetext = "Beep Boop! Hey Thursday daily <@UNDNUUA05>! "+username+" summoned you, saying:"+data.text.replace("@daily","");
          bot.postMessageToChannel(channelname, messagetext, params);

        }

        if(dayOfWeek == 'Friday') {
          messagetext = "Beep Boop! Hey Friday daily <@UN7AMT1B3>! "+username+" summoned you, saying:"+data.text.replace("@daily","");
          bot.postMessageToChannel(channelname, messagetext, params);

        }

        if(dayOfWeek == 'Saturday') {
          messagetext = "Beep Boop! Hey Saturday daily <@UN7AMTS2D>! "+username+" summoned you, saying:"+data.text.replace("@daily","");
          bot.postMessageToChannel(channelname, messagetext, params);

        }

        if(dayOfWeek == 'Sunday') {
          messagetext = "Beep Boop! Hey Sunday daily <@UN0VANWMQ>! "+username+" summoned you, saying:"+data.text.replace("@daily","");
          bot.postMessageToChannel(channelname, messagetext, params);

        }

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

        messagetext = "Beep Boop! Hey social team, <@UD02MNUDR>, <@UNE013Y20>, <@UNE1D2AJG>, <@UNEDRD9CY>! "+username+" summoned you, saying:"+data.text.replace("@social","");
        bot.postMessageToChannel(channelname, messagetext, params);

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

    };
});
