 const fs = require('fs')

 const db = require('quick.db')
 
 const config = require('./config.json')
 
 const { color } = require('./config.json')
 
 const Discord = require('discord.js');
// Création du client
 const client = new Discord.Client({
  intents : [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
  ]
 }
 ); 



 const bot = new Discord.Client();

const { MessageEmbed } = require('discord.js');

 client.commands = new Discord.Collection(); 

 client.aliases = new Discord.Collection(); 

 ["command", "events"].forEach(handler => { 

     require(`./handlers/${handler}`)(client); 

 });

client.on('message', message => {
    
  let user = message.author;

    

    

  let bal = db.fetch(`money_${user.id}`)

  

  let amount = bal =+ 1;

   

    

    db.add(`money_${user.id}`, amount)
    
  let prefix = db.get(`prefix_${message.guild.id}`) || "&"
  
   if (message.mentions.has(client.user)) {
     message.channel.send('Mon prefix sur ce serveur est : `' + prefix + "`");
     message.channel.send('Vous pouvez faire : `' + prefix + "help`");
   }

    
});



client.on('messageDelete', async (message) => { 

     db.set(`snipemsg_${message.channel.id}`, message.content) 

     db.set(`snipesender_${message.channel.id}`, message.author.id) 

 }); 

 bot.on("message", async message => {
  if(message.author.bot || message.channel.type === "dm") return;

  const messageArray = message.content.split(' ');
const cmd = messageArray[0];
const args = messageArray.slice(1);

  if (cmd === '+poll'){
      let pollChannel = message.mentions.channels.first();
      let pollDescription = args.slice(1).join(' ');

      let embedPoll = new Discord.MessageEmbed()
      .setTitle('😲 New Poll! 😲')
      .setDescription(pollDescription)
      .setColor('YELLOW')
      let msgEmbed = await pollChannel.send(embedPoll);
      await msgEmbed.react('👍')
      await msgEmbed.react('👎')
  }

})




client.login(process.env.TOKEN)
console.log('Je suis prét')