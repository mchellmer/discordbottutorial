require('dotenv').config()
const { Client, GatewayIntentBits } = require('discord.js');

const TOKEN = process.env.CLIENT_TOKEN

// Setup client to look for servers and messages 'guilds'
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

//On successful login do something, 'ready'
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

//Trigger on message send
client.on("messageCreate", (message) => {
    console.log(`Message content ${message.content}`)
    if (message.content == "hi") {
        message.reply("Hello World!!!!!")
    }
})

client.login(TOKEN)