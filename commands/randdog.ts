import { ICommand } from "wokcommands";
import DiscordJS from "discord.js";
//import dotenv from "dotenv";
import { MessageEmbed } from "discord.js";




function getPic() {
    return fetch(`https://api.thedogapi.com/v1/images/search?api_key=${process.env.DOGAPIKEY}`)
    .then(pic => {
        return pic.json();
    })
    .then(split => {
        return (split[0].url).toString();
    })
 
}


export default {
    category: "Fun", // ??
    description: "Returns a random dog pic.",
    slash: true, // allows both interaction and message
    testOnly: true, // sets only for the test server

    callback: async ({}) => {
        //let x = getQuote().then();

        const embed = new MessageEmbed()
        .setAuthor({name: " "})
        .setTitle(String(``)) 
        .setColor(0xC1E1C1)
        .setImage(`${(await getPic().then()).toString()}`)
        return embed
        
    },

} as ICommand

