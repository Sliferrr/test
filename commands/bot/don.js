const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = {

	name: 'don',

	description: "Donne le lien pour faire un don au développeur.",

    category: "🤖・bot",

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

    

     aliases: [],

    

    

	run: async (client, message, args) => {
    let embed = new MessageEmbed()
    
    .setTitle('Vous pouvez faire un don !')
    
    .setDescription('Si vous avez les moyens et l\'envie vous pouvez me faire un don juste [ici](https://www.paypal.com/paypalme/irrin).')
    .setFooter('Développer par Slifer.')
    
    .setColor(color)
    .setTimestamp();
        
   message.channel.send(embed);
    }
};