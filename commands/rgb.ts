import { ICommand } from "wokcommands";
import DiscordJS from "discord.js";
//import dotenv from "dotenv";
import { MessageEmbed } from "discord.js";
// var r = 0
// var g = 0
// var b = 0

function getName(r:number,g:number,b:number) {
    return fetch(`https://www.thecolorapi.com/id?rgb=rgb(${r},${g},${b})`)
    .then(data => {
        return data.json();
    })
    .then(split => {
        return [(split.name.value).toString(),(split.hex.value).toString(),(split.rgb.value).toString(),(split.hsl.value).toString(),(split.cmyk.value).toString()]
    })
 
}


export default {
    category: "Fun", // ??
    description: "Returns the colour from the rgb value.",
    slash: true, // allows both interaction and message
    testOnly: true, // sets only for the test server
    expectedArgs: '<r> <g> <b>',
    minArgs: 3,
    maxArgs: 3,


    callback: async ({channel,args}) => {
        var r = parseInt(args[0])!;
        var g = parseInt(args[1])!;
        var b = parseInt(args[2])!;
        var isOut = false;
        function checker(x:any) {
            if (x > 255 || x < 0 || isNaN(x)) {isOut = true} // isnan is a new code nugget
        }   //(r>256 || g>256 || b>256 || r<0 || g<0 || b<0)
        [r,g,b].forEach(checker)
        if (isOut) {return "One or more of your values is/are out of bounds."}

        const embed = new MessageEmbed()
        .setAuthor({name: " "})
        .setTitle(`Color: ${(await getName(r,g,b).then())[0].toString()}`)
        .addFields([
            {
                name:`Hex`,
                value:`${(await getName(r,g,b).then())[1].toString()}`,
                inline:true,
            },
            {
                name:`RGB`,
                value:`${((await getName(r,g,b).then())[2].toString()).substring(3)}`,
                inline:true,
            },
            {
                name:`HSL`,
                value:`${((await getName(r,g,b).then())[3].toString()).substring(3)}`,
                inline:true,
            },
            {
                name:`CMYK`,
                value:`${(((await getName(r,g,b).then())[4].toString()).substring(4)).replaceAll("NaN","0")}`, // replaceall is a new code nugget
                inline:true,
            },
        ])
        .setColor([r,g,b])
        .setFooter({text:"Using TheColorAPI"})
        return embed
        
    },

} as ICommand

