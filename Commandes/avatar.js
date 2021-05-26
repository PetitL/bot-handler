const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

  if (!message.mentions.users.size) {

    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor('#2f3136')
    .setTitle('Here is your profile picture')
    .setImage(message.author.displayAvatarURL({dynamic: true, size: 1024}))
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL());
    return message.channel.send(embed)

    }


 const avatarList = message.mentions.users.map(user => {

    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor('#2f3136')
    .setTitle(`Here is the avatar of  ${user.username}`)
    .setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
    .setFooter(`${client.user.username} ${footer}`, client.user.displayAvatarURL());

     message.channel.send(embed)
    });
    }


module.exports.help = {
  name:  "avatar",
  }