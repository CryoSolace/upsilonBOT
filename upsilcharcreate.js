"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
/*
const allLists = require("../upsilcharcreate/dnddata.ts");
const traits_ = allLists.vars().traits
const ideals_ = allLists.vars().ideals
const bonds_ = allLists.vars().bonds
const flaws_ = allLists.vars().flaws
const maleFirstnames_ = allLists.vars().maleFirstnames
const femaleFirstnames_ = allLists.vars().femaleFirstnames
const lastnames_ = allLists.vars().lastnames
//const characteristics_ = allLists.vars().characteristics
const spells_ = allLists.vars().spells


function ideals(num: number) {
    var returner = []
    for (let i = 0; i < num; i++){
        let x = ideals_[Math.floor(Math.random() * ideals_.length)]
        returner.push(x);
        ideals_.splice(ideals_.indexOf(x),1)
    }
    return returner;
}
//hell
console.log(ideals(1));*/
// console.log(allLists.vars());
// console.log(allLists.vars().characteristics)
// for (let i = 0; i < 10; i++ ){
//     console.log(Math.floor(Math.random() * 4)+1) // left val upper right val lower
// }
// var characteristics = [
//     "Strength",
//     "Dexterity",
//     "Consitution",
//     "Intelligence",
//     "Wisdom",
//     "Charisma"
// ]
exports.default = {
    category: "MainComms",
    description: "Creates a randomly generated character.",
    permissions: ["ADMINISTRATOR"],
    slash: true,
    testOnly: true,
    callback: async ({ message, text }) => {
        var lastName = " "; // + lastnames_[Math.floor(Math.random() * lastnames_.length)];
        var charName = " f"; //Math.random() > 0.5 ? maleFirstnames_[Math.floor(Math.random() * maleFirstnames_.length)] + lastName : femaleFirstnames_[Math.floor(Math.random() * femaleFirstnames_.length)] + lastName
        var traitDesc = " "; //traits_[Math.floor(Math.random() * traits_.length)]
        // generates random char name by concatting first with last, first name gender is random
        //var randPercent = (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)/100); // generates a number format XX.XX
        const embed = new discord_js_1.MessageEmbed() // embed construct 
            //.setAuthor({name: "creator"}) // author and footer deprecated, must now use objects
            .setTitle(String(`Profile: ${charName}`))
            .setDescription(`Bio: ${(traitDesc)}`) //String(traits_[Math.floor(Math.random() * traits_.length)]) + "\n")*(Math.floor(Math.random() * 3)+1)}`)
            .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
            .setFooter({ text: "Upsilon's Character Creator" })
            .addFields([
            {
                name: "\n\n**Characteristics**",
                value: "-/-/-/-/-/-/-/-/-/-/-/-/-",
                inline: false,
            },
            {
                name: "Strength",
                value: `Aptitude: ${String((Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100) / 100))}% `,
                inline: true,
            },
            {
                name: "Dexterity",
                value: `Aptitude: ${String((Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100) / 100))}% `,
                inline: true,
            },
            {
                name: "Constitution",
                value: `Aptitude: ${String((Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100) / 100))}% `,
                inline: true,
            },
            {
                name: "Intelligence",
                value: `Aptitude: ${String((Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100) / 100))}% `,
                inline: true,
            },
            {
                name: "Wisdom",
                value: `Aptitude: ${String((Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100) / 100))}% `,
                inline: true,
            },
            {
                name: "Charisma",
                value: `Aptitude: ${String((Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100) / 100))}% `,
                inline: true,
            },
            {
                name: "\n\n**Characteristics**",
                value: "-/-/-/-/-/-/-/-/-/-/-/-/-",
                inline: false,
            },
        ]);
        return embed;
    },
};
