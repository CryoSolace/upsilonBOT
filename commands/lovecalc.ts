import { ICommand } from "wokcommands";
import DiscordJS from "discord.js";
//import dotenv from "dotenv";
import { MessageEmbed } from "discord.js";


export default { // algo used: https://www.youtube.com/watch?v=oFsLVG7EAZ4
    category: "Fun", // ??
    description: "Returns the love percentage for two people",
    slash: true, // allows both interaction and message
    testOnly: true, // sets only for the test server
    expectedArgs: '<Person 1> <Person 2>',
    minArgs: 2,
    maxArgs: 2,


    callback: async ({channel,args}) => {

        // step 1 - initialise all vars
        var first = args[0]!;
        var second = args[1]!;
        var base = first+"loves"+second
        var list1: Array<any> = base.split("")
        list1 = list1.filter(x => x !== " ")
        var list2: Array<any> = []
        var count = 0

        // step 2 - count the letters and push to list 2
        while (list1.length != 0) {
            let main = list1[0]
            list1.forEach(same => {same == main ? count++ : count = count})
            list2.push(count)
            list1.shift()
            list1 = list1.filter(x => x !== main)
            count = 0
        }

        // step 3 - reduce to 2 numbers
        list1 = [0,0]
        while (true){
            while (true) { // swaps between list 2 and list 1
            if (list2.length == 1 || list2.length == 0) {list1.push(list2[0]);list2.splice(0,1); break}
                list1.push(list2[0]+list2[list2.length-1])
                list2.splice(list2.length-1,1)
                list2.splice(0,1)
            }
            list1 = list1.filter(x => x !== 0 && x !== undefined)
            if (list1.length <= 2) {break}

            while (true) {
                if (list1.length == 1 || list1.length == 0) {list2.push(list1[0]);list1.splice(0,1); break}
                list2.push(list1[0]+list1[list1.length-1])
                list1.splice(list1.length-1,1)
                list1.splice(0,1)
            }
            list2 = list2.filter(x => x !== 0 && x !== undefined)
            if (list2.length <= 2) {break}
        }

        // step 4 - finalise by joining
        if (list1) {
            var percent: any =  list1.join("")
        } else {var percent: any = list2.join("")}
        
        // step 5 - ensure all above 100 is reduced further
        while (parseInt(percent) > 100 ) {
            percent = percent.split(""); 
            percent[0] = parseInt(percent[0])+parseInt(percent[percent.length-1]); 
            percent.pop()
            percent = percent.join("")
        }
        // step 6 - cry because why is it reutrning NaN?? nvm it works
        //console.log(percent)



        const embed = new MessageEmbed()
        .setAuthor({name: " "})
        .setTitle(`Love Percent Calculator`)
        .addFields([
            {
                name:`${first} + ${second}`,
                value:`${percent}%`,
                inline:true,
            },
        ])
        .setColor("#F8C8DC")
        .setFooter({text:"https://www.youtube.com/watch?v=oFsLVG7EAZ4"})
        return embed
        
    },

} as ICommand

