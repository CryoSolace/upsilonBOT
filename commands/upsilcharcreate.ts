import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

const allLists = require("../upsilcharcreate/dnddata.ts");
const traits_ = allLists.vars().traits
const ideals_ = allLists.vars().ideals
const bonds_ = allLists.vars().bonds
const flaws_ = allLists.vars().flaws
const maleFirstnames_ = allLists.vars().maleFirstnames
const femaleFirstnames_ = allLists.vars().femaleFirstnames
const lastnames_ = allLists.vars().lastnames
const characteristics_ = allLists.vars().characteristics
const spells_ = allLists.vars().spells

// console.log(allLists.vars());
// console.log(allLists.vars().characteristics)







export default {
    category: "MainComms",
    description: "Creates a randomly generated character.",
    permissions:["ADMINISTRATOR"],
    slash: true,
    testOnly: true,

    callback: async ({message, text}) => {
        
        var lastName = " " + lastnames_[Math.floor(Math.random() * lastnames_.length)];
        var charName = Math.random() > 0.5 ? maleFirstnames_[Math.floor(Math.random() * maleFirstnames_.length)] + lastName : femaleFirstnames_[Math.floor(Math.random() * femaleFirstnames_.length)] + lastName
        console.log(charName);
        // generates random char name by concatting first with last, first name gender is random
        var randPercent = (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)/100); // generates a number format XX.XX

        const embed = new MessageEmbed() // embed construct 
            .setAuthor({name: "Upsilon's Character Creator"}) // author and footer deprecated, must now use objects
            .setTitle(String(`Profile: ${charName}`)) 
            .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
            .setDescription("Hello world")
            .setFooter({text: "Upsilon's Character Creator"})
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
    },
} as ICommand