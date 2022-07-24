const { Client, GatewayIntentBits } = require('discord.js');

const TOKEN = process.env.GUILD_ID

//Setup client to look for servers and messages 'guilds'
const client = new Discord.Client({
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