const Discord = require("discord.js");
const config = require("./config.json");
const tokenfile = require("./token.json");
const prefix = "!";

const client = new Discord.Client();

client.on("message", function(message) {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "hello"){
        const ping = Date.now() - message.createdTimestamp;
        message.reply(`AAaaAAaaaaaaAAA, ${ping}`);
    }
});

client.login(tokenfile.TOKEN);