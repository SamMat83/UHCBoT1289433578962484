const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "uhc!";

client.on("ready", ()=> {
    console.log("Bot Connecté");
});

client.login("process.env.TOKEN");

client.on("ready", ()=> {
    client.user.setPresence({
        game : {
            name:"UHC-Bot | uhc!"
        }
        })
    });

    client.on("guildMemberAdd", user =>{
        let joinEmbed = new Discord.RichEmbed()
            .setColor("#ff8911")
            .setAuthor("Un Nouveau Joueur", client.user.displayAvatarURL)
            .setDescription("Bienvenue sur le serveur" + user)
            .setFooter("via UHC-Bot")
        user.guild.channels.get("661369501740302336").send(joinEmbed)
    });
