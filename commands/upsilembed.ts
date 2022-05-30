
import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

const randomText = ["Cheemsburger","Peperoni pizza","chadwich","Despacheetos","SausageTroll"];


export default {
    category: "Testing2",
    description: "embeds",
    permissions:["ADMINISTRATOR"],
    slash: true,
    testOnly: true,

    callback: async ({message, text}) =>  {
        // const json = JSON.parse(text) // parses message to json variable as json element
        // const embed = new MessageEmbed(json) 
        // return embed
        var randString:string = randomText[Math.floor(Math.random() * randomText.length)] // calls a random value from the array randomText
        var randPercent = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)/100 // generates a number format XX.XX
        const embed = new MessageEmbed() // embed construct 
            .setAuthor({name: 'Alex'}) // author and footer deprecated, must now use objects
            .setTitle(String(randString)) 
            .setColor("RED")
            .setDescription("Hello world")
            .setFooter({text: 'Alex'})
            .addFields([
                {
                    name:`${String(randPercent)}% dumb`,
                    value:"value",
                    inline:true,
                },
                {
                    name:"name2",
                    value:"valu2e",
                    inline:true,
                }
            ])
        return embed;
        // const newMessage = await message.reply({ // must use async when await is written
        //     embeds:[embed]
        // })
        // await new Promise(resolve => setTimeout (resolve,5000)) //changes message after 5000 ms
        // const newEmbed = newMessage.embeds[0] // newEmbed is set to newMessage's first element of the embeds array

        // newEmbed.setTitle("Edited") // we change newEmbed's title to edited only after 5000ms
        // newMessage.edit({
        //     embeds:[newEmbed,embed]
        // })
    },
} as ICommand