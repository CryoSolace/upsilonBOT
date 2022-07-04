import { ICommand } from "wokcommands";
import { MessageEmbed } from "discord.js";
import DiscordJS from "discord.js";

export default {
    category: "Testing", // ??
    description: "Lists all commands.",
    slash: true, // allows both interaction and message
    testOnly: true, // sets only for the test server

    callback: async ({}) => {
        const embed = new MessageEmbed() // embed construct 
            .setAuthor({name: " "}) // author and footer deprecated, must now use objects
            .setTitle(String(`Upsilon Bot Commands`)) 
            .setColor("DEFAULT")

            .setDescription(`Lists all bot commands from upsilonBOT`)
            
            .addFields([
                {
                    name:"Fun",
                    value:"animedne\ncharcr\ncharcrexpl\ndice\nlovecalc\nquote\nrandcat\nranddog\nrgb\nwaifudne",
                    inline:true,
                },
                {
                    name:"Testing",
                    value:"ping\ncommands\nupsembed\nupstest",
                    inline:true,
                },  
            ])
        return embed;
    },

} as ICommand