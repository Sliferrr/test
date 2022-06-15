const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = { 

     name: "hentai", 

     description: "Envoie une image nsfw.", 

     category: "🔞・nsfw", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "",

     aliases: ["r34"],

     run: async (client, message, args) => {

         
if (message.channel.nsfw === false) {

    return message.channel.send(":warning: Ce salon n'est pas NSFW !"); }
    
    if (message.channel.nsfw === true) {     

 const API = require('anime-images-api')

const images_api = new API() 

        images_api.nsfw.hentai().then(response => {

            

const embed = new MessageEmbed()

    .setTitle('Hentai')

    .setImage(response.image)

    .setColor(color)

            

       

            message.channel.send(embed)

        })
        }

    



     }
    };