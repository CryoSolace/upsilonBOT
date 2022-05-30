import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";
import WOKCommands from "wokcommands"
import path from "path"

dotenv.config();

const client = new DiscordJS.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})

client.on("ready", c =>{
    console.log(`Ready as ${c.user.tag}.`);

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, "commands"),
        typeScript: true,
        testServers: ["364047009839054858"],
    })
    .setDefaultPrefix("+")
})

client.login(process.env.TOKEN);
/*
client.on("ready", c =>{
    console.log(`Ready as ${c.user.tag}.`);
    const guildID = "364047009839054858";
    const guild = client.guilds.cache.get(guildID);
    let commands;

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands;
    }

    commands?.create({
        name:"ping",
        description:"pongers"
    })

    commands?.create({
        name: "add",
        description: "adde 2 2 2r",
        options: [
            {
                name:"num1",
                description:"adder",
                required:true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name:"num2",
                description:"num2",
                required:true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]

    })
})

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()){
        return;
    }
    const { commandName, options } = interaction

    if (commandName === "ping") {
        interaction.reply({
            content:"pong",
            ephemeral:true,
        })
    } else if (commandName ==="add") {
        const num1 = options.getNumber("num1")!
        const num2 = options.getNumber("num2")!
        
        await interaction.deferReply({
            //
        })
        await new Promise(resolve => setTimeout(resolve, 5000))

        interaction.editReply({
            content:`${num1} + ${num2} = ${num1+num2}`
        })
    }
})

client.on("messageReady", message => {
    if (message.content === "ping") {
        message.reply({
            content:"pong",
        })
    } 
})
*/
