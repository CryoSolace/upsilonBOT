import { ICommand } from "wokcommands";
import DiscordJS from "discord.js";
import { MessageEmbed } from "discord.js";


export default {
    category: "Fun", // ??
    description: "Returns a randomly generated waifu.",
    slash: true, // allows both interaction and message
    testOnly: true, // sets only for the test server

    callback: async ({}) => {
        //let x = getQuote().then();
        let seed = (Math.floor(Math.random() * 9000)+1000).toString();

        
        const embed = new MessageEmbed()
        //.setAuthor({name: " "})
        .setColor(0x515151)
        .setImage(`https://www.thiswaifudoesnotexist.net/example-${seed}.jpg`)
        .setFooter({text: `Images taken from: https://www.thiswaifudoesnotexist.net/, Seed: ${seed}`})
      
        return embed
        
    },

} as ICommand