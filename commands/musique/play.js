 module.exports = {

	name: 'play',

	description: "Joue de la musique.",

    category: "🎵・musique",

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

    

     aliases: ["p"],

    

    

	run: async (client, message, args) => { 
        

 const ytdl = require('ytdl-core'); 

  

 const url = args.join(" "); 

 

  

  

  

   console.log('Got a song request!'); 

   const voiceChannel = message.member.voice.channel; 

   if (!voiceChannel) { 

     message.reply('Veuillez d\'abord être dans un canal vocal !'); 

     return; 

   } 

   const connection = await voiceChannel.join(); 

   // Disabling chunking is recommended in Discord bots 

   const stream = ytdl(url, { filter: 'audioonly', dlChunkSize: 0 }); 

   const dispatcher = connection.play(stream); 

   dispatcher.on('speaking', speaking => { 

     if (!speaking) voiceChannel.leave(); 

   });
}
     };