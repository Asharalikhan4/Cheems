const { REST, Routes } = require("discord.js");

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken("MTE5MTk2NjAwNjcwMTIwNzU4Mg.GHiE72.aoJkItWopz-vcHacWh5gJgrEXfksn2EiZLOxsA");

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands("1191966006701207582"), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();