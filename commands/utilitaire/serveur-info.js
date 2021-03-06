 

 const { MessageEmbed } = require('discord.js'); 

const { color } = require('../../config.json')

 module.exports = {
     
     name: "serveur-info", 

     description: "Donne les informations sur le serveur.", 

     category: "âï¸ã»Utilitaire", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     aliases: ["info-serveur"],
 

         run: async (client, message, args) => { 

                 let region; 

                 switch (message.guild.region) { 

                 case 'europe': 

                         region = 'ðªðº Europe'; 

                         break; 

                 case 'us-east': 

                         region = 'ðºð¸ us-east'; 

                         break; 

                 case 'us-west': 

                         region = 'ðºð¸ us-west'; 

                         break; 

                 case 'us-south': 

                         region = 'ðºð¸ us-south'; 

                         break; 

                 case 'us-central': 

                         region = 'ðºð¸ us-central'; 

                         break; 

                 default: 

                         region = 'Inconnue'; 

                 } 

  

                 const embed = new MessageEmbed() 

                         .setThumbnail(message.guild.iconURL({ dynamic: true })) 

                         .setColor(color) 

                         .setTitle(`${message.guild.name} stats`) 

                          
 

                         .addFields(
                                 { 

                                         name: 'Membres: ', 

                                         value: `${message.guild.memberCount} membres`, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Membres en ligne: ', 

                                         value: `${message.guild.members.cache.filter((m) => m.user.presence.status === 'online').size} `, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Nombres de bots: ', 

                                         value: `${message.guild.members.cache.filter((m) => m.user.bot).size} bots !`, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'CrÃ©e le: ', 

                                         value: message.guild.createdAt.toLocaleDateString('fr-eu'), 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Nombre de rÃ´les: ', 

                                         value: `${message.guild.roles.cache.size} rÃ´les.`, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'ðº RÃ©gion: ', 

                                         value: region, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'VÃ©rifiÃ©: ', 

                                         value: message.guild.verified ? 'Le serveur est vÃ©rifiÃ©' : 'Le serveur n\'est pas vÃ©rifiÃ©', 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Boosters: ', 

                                         value: message.guild.premiumSubscriptionCount >= 1 ? `${message.guild.premiumSubscriptionCount} Boosters` : 'Il n\'y a pas de boosters', 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Emojis: ', 

                                         value: message.guild.emojis.cache.size >= 1 ? `${message.guild.emojis.cache.size} emojis!` : 'Il n\'y a pas d\'emoji', 

                                         inline: true, 

                                 }, 

                         ); 

                 return message.channel.send(embed); 

         }, 

 };