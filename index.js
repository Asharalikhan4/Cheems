const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    message.reply({
        content: "Hi from Cheems",
    });
});

client.on("interactionCreate", (interaction) => {
    interaction.reply("Pong");
});

client.login("MTE5MTk2NjAwNjcwMTIwNzU4Mg.GHiE72.aoJkItWopz-vcHacWh5gJgrEXfksn2EiZLOxsA")