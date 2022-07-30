const Discord = require("discord.js")

// On messageCreate event handle when to respond and load commands to process response
module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message){
        const {client, prefix, owners} = bot

        // Ignore messages not from our guild, from bots, doesn't start with our prefix
        if (!message.guild) return
        if (message.author.bot) return
        if (!message.content.startsWith(prefix))
            return
        
        // Split content by spaces removing the prefix
        // Ignore messages not in our command list (/commands/..)
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const cmdstr = args.shift().toLowerCase()
        let command = client.commands.get(cmdstr)
        if (!command) return

        // Permission check
        let member = message.member
        if (command.devOnly && !owners.includes(member.id)) {
            return message.reply("This command is only available to the bot owners")
        }
        if (command.permissions && member.permissions.missing(command.permissions).length !== 0){
            return message.reply("You do not have premission to use this command")
        }

        // Run the command
        try {
            await command.run({...bot, message, args})
        } catch (err) {
            let errMsg = err.toString()

            if (errMsg.startsWith("?")) {
                errMsg = errMsg.slice(1)
                await message.reply(errMsg)
            }
            else
                console.error(err)
        }
    }
}