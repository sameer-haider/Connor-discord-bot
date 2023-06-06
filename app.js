const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === '!hello') {
        message.channel.send('Hello!');
    }
});

client.login(process.env.BOT_TOKEN);

