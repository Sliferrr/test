 // comme tu vas rien n'y comprendre je vais te commenter mon code

const { MessageEmbed } = require("discord.js")

const { color } = require('../../config.json')

module.exports = { 

     

     name: "setavatar", 

     description: "Set l'avatar du bot.", 

     category: "🧑‍💻・owner", 

     botPermission: [""], 

     authorPermission: [""], 

     ownerOnly: true,

     

     usage: "",

     aliases: [],

 run: async(client, message, args) => {
     //si il y a rien ça va envoyer le message
     if (!args[0]) return message.channel.send("Il faut mettre un lien ! (pas une image)")
     
     
// création de la variable texte
     let texte = args.join(" ");
     
     //supprime le message
     message.delete();
     // change la pdp
     client.user.setAvatar(texte);
 
     // crée un nouvelle embed
     const embed = new MessageEmbed()

     
// set la description
     .setDescription('Mon avatar a bien été set pour :')
// envoie l'image ( le lien)
     .setImage(texte)
//set le footer 
     .setFooter('Slifer')
//set la couleur 
     .setColor(color)
// ajoute l'horloge
     .setTimestamp();
// envoie l'embed     
     await message.channel.send(embed);
     
     
      
 }
     };