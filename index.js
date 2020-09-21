
//Import libraries
var SlackBot = require('slackbots');
var fs = require('fs');

//Initialize the slackbot, using slackbots.js library and the token generated by Slack
//(logged in Heroku as an environmental variable)
const token1 = process.env.BWOGTOKEN;
const board = process.env.BOARD;
const social = process.env.SOCIAL;
const tech = process.env.TECH;
const news = process.env.NEWS;
const monday = process.env.MONDAY;
const tuesday = process.env.TUESDAY;
const wednesday = process.env.WEDNESDAY;
const thursday = process.env.THURSDAY;
const friday = process.env.FRIDAY;
const saturday = process.env.SATURDAY;
const sunday = process.env.SUNDAY;
process.env.TZ = "America/New_York";

var bot = new SlackBot({
  token: token1,
  name: 'groupie'
});

//Add function to post reactions
bot.postReactionToChannel = function(id, emoji, ts, params) {
    params = {
        channel: id,
        name: emoji,
        timestamp: ts
    }, params || {};

    return this._api('reactions.add', params);
};

//Set global params - bot icon, linking names in message
var params = {
  icon_emoji: ':robot_face',
  link_names: 'true'
};

//On bot start: log data (optional), post startup message
bot.on('start', function(data) {

  //Log data
  // fs.writeFile('Output.txt', JSON.stringify(bot.getUsers()._value.members), function(err) {
  //   if (err) throw err;
  //   console.log('Startup successful');
  // });

  //Startup message
  bot.postTo('shhhhtesting',"Hello! I'm starting.", params);
});

//Function to find who triggered groupie and in what channel
function getUserAndChannel(user,channel){
  username = bot.getUsers()._value.members.find(o => o.id === user).profile.first_name;
  try {
    channelname = bot.getChannels()._value.channels.find(o => o.id === channel).name;
  }
  catch {
    channelname = bot.getGroups()._value.groups.find(o => o.id === channel).name;
  }
  return [username, channelname]
};


//Bot is triggered by message containing certain messagetext
bot.on('message', function(data) {

    //@testing
    if (data.type === 'message' && data.text.includes('@testing')) {
      var arr = getUserAndChannel(data.user,data.channel)
      messagetext = "This is a test <@"+data.user+">"
      bot.postTo(arr[1], messagetext, params);
    }

    //@board
    if (data.type === 'message' && data.text.includes('@board')) {
      var arr = getUserAndChannel(data.user,data.channel)
      messagetext = "Beep Boop! Hey board, "+board+"! "+arr[0]+" summoned you, saying: "+data.text.replace("@board","");
      bot.postTo(arr[1], messagetext, params);
    }

    //@social
    if (data.type === 'message' && data.text.includes('@social')) {
      var arr = getUserAndChannel(data.user,data.channel)
      messagetext = "Beep Boop! Hey social team, "+social+"! "+arr[0]+" summoned you, saying: "+data.text.replace("@social","");
      bot.postTo(arr[1], messagetext, params);
    }

    //@tech
    if (data.type === 'message' && data.text.includes('@tech')) {
      var arr = getUserAndChannel(data.user,data.channel)
      messagetext = "Beep Boop! Hey tech team, "+tech+"! "+arr[0]+" summoned you, saying: "+data.text.replace("@tech","");
      bot.postTo(arr[1], messagetext, params);
    }
  
    //@news
    if (data.type === 'message' && data.text.includes('@news')) {
      var arr = getUserAndChannel(data.user,data.channel)
      messagetext = "Beep Boop! Hey news team, "+news+"! "+arr[0]+" summoned you, saying: "+data.text.replace("@news","");
      bot.postTo(arr[1], messagetext, params);
    }

    //@daily
    if (data.type === 'message' && data.text.includes('@daily')) {
      var arr = getUserAndChannel(data.user,data.channel)

      var now = new Date();
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      td = days[now.getDay()];

      var dict = new Map();
      dict.set("Sunday", sunday);
      dict.set("Monday", monday);
      dict.set("Tuesday", tuesday);
      dict.set("Wednedsay", wednesday);
      dict.set("Thursday", thursday);
      dict.set("Friday", friday);
      dict.set("Saturday", saturday);

      messagetext = "Beep Boop! Hello "+td+" daily "+dict.get(td)+"! "+username+" summoned you, saying:"+data.text.replace("@daily","");
      bot.postTo(channelname, messagetext, params);
    }
});
