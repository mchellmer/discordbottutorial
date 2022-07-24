require('dotenv').config()
const { Client, GatewayIntentBits } = require('discord.js');

const TOKEN = process.env.CLIENT_TOKEN

//Setup client to look for servers and messages 'guilds'
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
})

//On successful login do something
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.login(TOKEN)