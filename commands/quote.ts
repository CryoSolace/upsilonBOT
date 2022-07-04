import { ICommand } from "wokcommands";
import DiscordJS from "discord.js";
import { MessageEmbed } from "discord.js";


//var quote = "test";
//var author = "test";

//to do
//fix
//https://fakeface.rest/face/json?gender=female&minimum_age=16&maximum_age=20
function getQuote(){
    return fetch("https://zenquotes.io/api/random")
    .then(quote => {
        return quote.json();
    })
    .then(split => {
        //

        return split[0]["q"] + "@@" + split[0]["a"];
        //return {quote,author};
    })
 
}

export default {
    category: "Fun", // ??
    description: "Returns a random quote",
    slash: true, // allows both interaction and message
    testOnly: true, // sets only for the test server

    callback: async ({}) => {
        //let x = getQuote().then();
        let entire = (getQuote().then());
        let entireStr = (await entire).toString();
        const QA = entireStr.split("@@");
        let Q = QA[0]
        let A = QA[1] 

        const embed = new MessageEmbed()
        .setAuthor({name: " "})
        .setTitle(String(`${Q}`)) 
        .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
        .addFields([
            {
                name:`~ *${A}*`,//`~ ${getQuote().then()}`,
                value:` - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`,//(await entire).toString(),//" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n",
                inline:true,
            },
        ])
        return embed
        
    },

} as ICommand