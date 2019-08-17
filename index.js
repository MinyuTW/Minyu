const Discord = require("discord.js");
const client = new Discord.Client();
client.music = require("dc-music-bot-addon-chinese");
client.on('ready', () => {
  console.log(`${client.user.username} 成功上線!`);
});

client.on('message', message => {
  if(message.content === '嗨'){
message.channel.send(`<@${message.author.id}>嗨~~`)
  }
});
client.music.start(client, {
  youtubeKey: "AIzaSyAxRS5r6jwqpIwdDmAsXlpwjUThtYYJdCM",
  botPrefix:"瘦敏"
});
client.login("NTg0MjEzMzg0NDA5MzgyOTUz.XVdryQ.We3AqFvFeTg7RdBYOU8Yj36T0QM")
