import { ICommand } from "wokcommands";

import { MessageEmbed } from "discord.js";

export default {
    category: "Fun", // ??
    description: "Rolls X-sided dice Y amount of times. ",
    slash: true, // allows both interaction and message
    testOnly: true, // sets only for the test server
    expectedArgs: '<sides> <amount>',
    minArgs: 2,
    maxArgs: 2,

    callback: async ({channel, args}) => {
        const sides = parseInt(args[0])!;
        const amount = parseInt(args[1])!;
        var rolls = [];
        
        for (let i = 0; i < amount; i++){
            rolls.push(Math.ceil(Math.random()*sides));
        }
        var rolling =  amount == 1 ? `${amount} ${sides}-sided die... ` : `${amount} ${sides}-sided dice... `
        var results = amount == 1 ? `Die Roll:` : `Dice Rolls:`
        const embed = new MessageEmbed()
        .setAuthor({name: " "})
            .setTitle(String(`Dice Roll`)) 
            .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
            .addFields([
                {
                    name:"Rolling:",
                    value:`\n${rolling}`,
                    inline:true,
                },
                {
                    name: results,
                    value:`[${rolls}]`,
                    inline:true,
                },  
            ])
        return embed;
    },

} as ICommand