const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Hey it Me Jessy Im here to Help You',
        iconURL: 'https://cdn.discordapp.com/attachments/1187377061959045181/1207719172570619915/95c842110d8d7e60a852fdc14150c771.jpg?ex=65e0ab21&is=65ce3621&hm=74c8324881efbb0899ed80d6f5a92ae11b255d877dc0549f7d1b17af422fbd1c&', 
        url: 'https://discord.gg/'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [Zxy.]**\n\n__**COMMANDS :**__ `)
      .addFields(
        // Basic commands category
        {
          name: '▶️  Basic',
          value: '``` av | owner | invite | userinfo ```',
          inline: true,
        },
        // Music commands category
        {
          name: '▶️  Music',
          value: '``` p | s | h | v | stop | resume | 24/7 ```',
          inline: true,
        },
        //fun category
        {
          name: '▶️  Fun',
          value: '``` ascii | joke | meme | roll ```',
          inline: true,
        },
        //image category
        {
          name: '▶️  Image',
          value: '``` cat | dog | panda ```',
          inline: true,
        },
        //anime category
        {
          name: '▶️  Anime',
          value: '``` use ?anime for all anime command ```',
          inline: true,
        },
        // Utility commands category
        {
          name: '▶️  Utility',
          value: '``` kick | ban | info | uptime ```',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1187377061959045181/1207719172570619915/95c842110d8d7e60a852fdc14150c771.jpg?ex=65e0ab21&is=65ce3621&hm=74c8324881efbb0899ed80d6f5a92ae11b255d877dc0549f7d1b17af422fbd1c&`);

    const button1 = new ButtonBuilder()
      .setLabel('YouTube')
      .setURL('https://www.youtube.com/')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Code')
      .setURL('https://replit.com/')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
