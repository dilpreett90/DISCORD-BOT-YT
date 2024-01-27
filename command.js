const { REST, Routes }=require("discord.js");
const commands = [
    {
      name: 'create',
      description: 'Creates a new short URL',
    },
  ];
  const rest = new REST({ version: '10' }).setToken("MTIwMDQ1MTY5NjA4MjU1MDgxNQ.GEy09u.KVTGDDu2X8CNpcA88-88RPDJdXepnXGUuUYPKI");
 (async ()=>{
    try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1200451696082550815"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
