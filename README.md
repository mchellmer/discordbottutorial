# Tutorial for making discord bots
- https://www.youtube.com/watch?v=1jtAWZK3Bbk&t=220s

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