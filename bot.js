const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("YouTube", {type: "WATCHING"})

    client.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
        //General Channel ID 512298809779421206
    })
    let generalChannel = client.channels.get("bot token goes here")
    const attachment = new Discord.Attachment("https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fpearlsofprofundity.files.wordpress.com%2F2013%2F02%2Ffamily-tree-with-apple.jpg&f=1")
    generalChannel.send(attachment)
})

//Bot Token
client.login("NTEyMzAwMjk2MTM1NzcwMTMx.Ds3fog.rbxXFlSTss39cYn712CcS27sJhc")
