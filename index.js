const{ Client, GatewayIntentBits, Message }=require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent],
});

client.on('messageCreate',(message)=>{
    if(message.author.bot)
    return;
if(message.content.startsWith("create")){
    const url=message.content.split("create")[1];
    return message.reply({
        content:"Generating short ID for"+url,
    });
}
   message.reply({
    content:"Hi from bot",
   });
});
client.login("MTIwMDQ1MTY5NjA4MjU1MDgxNQ.GEy09u.KVTGDDu2X8CNpcA88-88RPDJdXepnXGUuUYPKI");
client.on("interactionCreate",(interaction)=>{
console.log(interaction);
interaction.reply("Pong!!");
});