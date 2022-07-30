# Tutorial for making discord bots
- https://www.youtube.com/playlist?list=PLOlSzPEdp-bRnCzZX6qnKehutm2nb_tN-

## init
1. Start node project
- 'npm init' accept all defaults
  - package.json -> manages e.g. dependencies

2. Install discord.js
- 'npm i discord.js' -> see in package.json that this was added

3. Create discord app and bot
- create app in discord
- add bot to app
- take token and add to .env
  - npm install dotenv

4. Code index.js
- basic function to log something on succsessful integration with server
- add basic command to respond to hi, ensure bot is configured for message content

5. Add events, handlers, util functions
- create more complex app structure for efficiency
- /events: .js files with event actions e.g. bot logs in, ready event runs some init tasks
- /handlers: .js files to manage shared tasks e.g. bot is initialised and the events handler loads all configured events
- /util: .js files to do basic tasks e.g. handlers need to load files to init bot, functions.js contains a shared function for this
- /commands: defines operations to execute with bot e.g. message = ding, command named 'ding' executes a reploy of 'dong' 
