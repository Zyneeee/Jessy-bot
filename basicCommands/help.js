const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Hey it Me Jessy Im here to Help You',
        iconURL: '', 
        url: 'https://discord.gg'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [Zxy.]**\n\n__**COMMANDS :**__ `)
      .addFields(
        // Basic commands category
        {
          name: '▶️  Basic',
          value: '```avatar```, ```owner```, ```support```, ```invite```, ```userinfo```',
          inline: true,
        },
        // Music commands category
        {
          name: '▶️  Music',
          value: '```play```, ```stop```, `history`,```volume```,```pause```,```resume```,```24/7``',
          inline: true,
        },
        //fun category
        {
          name: '▶️  Fun',
          value: ' ```ascii```, ```joke```, ```meme```, ```roll```, `animecommands`',
          inline: true,
        },
        //image category
        {
          name: '▶️  Image',
          value: '```cat```, ```dog```, ```panda```',
          inline: true,
        },
        //anime category
        {
          name: '▶️  Anime',
          value: '```hug```, ```slap```, ```pat```, ```kiss```, ```sad```, ```bonk```, ```bully```, ```blush```, ```bored```, ```cry```, ```dance```, ```scream```, ```highfive```, ```stare```, ```wave```, ```thinking```, ```wink```, ```yes```, ```cuddle```, ```nervous```',
          inline: true,
        },
        // Utility commands category
        {
          name: '▶️  Utility',
          value: '```kick```, ```ban```, ```serverinfo```, ```clear```, ```uptime```',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1175487983915376662/1175668219592331385/Multi_Musix_bot.png?ex=656c115a&is=65599c5a&hm=f31305678f6f5621228bae42312b77577380b5757c806469799392bd854a265f&`);

    const button1 = new ButtonBuilder()
      .setLabel('YouTube')
      .setURL('https://www.youtube.com')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Code')
      .setURL('https://replit.com')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
