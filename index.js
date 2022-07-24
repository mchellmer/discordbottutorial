require('dotenv').config()
const { Client, GatewayIntentBits, Collection } = require('discord.js');

// Setup client to look for servers and messages 'guilds'
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

let bot = {
    client,
    prefix: "n.",
    owners: ["658560411800698892#8345"]
}

//Map key values of commands and events in bot
client.commands = new Collection()
client.events = new Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

// //On successful login do something, 'ready'
// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}`)
// })

// //Trigger on message send
// client.on("messageCreate", (message) => {
//     console.log(`Message content ${message.content}`)
//     if (message.content == "hi") {
//         message.reply("Hello World!!!!!")
//     }
// })

client.login(process.env.CLIENT_TOKEN)