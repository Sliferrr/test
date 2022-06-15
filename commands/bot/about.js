const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = {

	name: 'about',

	description: "Donne les différents réseaux sociaux du développeur.",

    category: "🤖・bot",

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

    

     aliases: [],

    

    

	run: async (client, message, args) => {

    let embed = new MessageEmbed()

    

    .setTitle('Voici les différents réseaux sociaux !')
     
   .addField('<:insta:947966769363058718> Instagram', 'proverbe_manga | [lien](https://www.instagram.com/proverbe_manga/)', true)
    
   .addField('<:tiktok:947967283211431946> Tiktok', 'night_diamond_off | [lien](https://www.tiktok.com/@night_diamond_off?lang=fr)', true)
    
   .addField('<:discord:947968136811016292> Discord', '𝙎𝙇𝙄𝙁𝙀𝙍 愛 Ƶƶ#0001', true)
    
   .addField('<:twitter:947968900434374696> Twitter', '@EL__Slifer  | [lien](https://twitter.com/EL__Slifer)', true)
   
   .addField('<:paypal:947976759649914940> PayPal', 'Slifer Lagrenade | [lien](https://www.paypal.com/paypalme/irrin)', true)
    

    .setColor(color)

    .setFooter('Développer par Slifer.')
    
    .setTimestamp();

        

   message.channel.send(embed);

    }

};