import { ICommand } from "wokcommands";
import DiscordJS from "discord.js";
//import dotenv from "dotenv";
import { MessageEmbed } from "discord.js";


//var quote = "test";
//var author = "test";

//to do
//fix
//https://fakeface.rest/face/json?gender=female&minimum_age=16&maximum_age=20
// function getCat() {
//     return fetch(`https://api.thecatapi.com/v1/images/search`)//?api_key=${process.env.APIKEY}`)//https://zenquotes.io/api/random")
//     .then(pic => {
//         return pic.json();
//     })
//     .then(async split => {
//         //
//         //const obj = JSON.parse(split)
//         // if (split.width > 500 || split.length > 500) {
//         //     getCat().then()
//         // }
//         const url = split.url
//         console.log(split.toString(),url)
//         return (await url).toString();// + "@@" + split[0]["a"];
//         //return {quote,author};
//     })
 
// }


function getPic() {
    return fetch(`https://api.thecatapi.com/v1/images/search?api_key=${process.env.CATAPIKEY}`)
    .then(pic => {
        return pic.json();
    })
    .then(split => {
        return (split[0].url).toString();
    })
 
}


export default {
    category: "Fun", // ??
    description: "Returns a random cat pic.",
    slash: true, // allows both interaction and message
    testOnly: true, // sets only for the test server

    callback: async ({}) => {
        //let x = getQuote().then();

        const embed = new MessageEmbed()
        .setAuthor({name: " "})
        .setTitle(String(``)) 
        .setColor(0xFAC898)
        .setImage(`${(await getPic().then()).toString()}`)
        return embed
        
    },

} as ICommand

