import { ICommand } from "wokcommands";
import DiscordJS from "discord.js";
import { MessageEmbed } from "discord.js";


export default {
    category: "Fun", // ??
    description: "Returns images in the style of anime that does not exist.",
    slash: true, // allows both interaction and message
    testOnly: true, // sets only for the test server

    callback: async ({}) => {
        //let x = getQuote().then();
        let seed = (Math.floor(Math.random() * 100000)).toString(); // 00000-99999
        if (((seed).toString()).length != 5) { // this line maybe redundant
            seed = (seed.toString()).padStart(5,"00000");
        } // pads to make 5 digit

        
        const embed1 = new MessageEmbed()
        //.setAuthor({name: " "})
        .setTitle("1")
        .setColor(0xC0C0C0)
        .setImage(`https://thisanimedoesnotexist.ai/results/psi-0.3/seed${seed}.png`)

        const embed2 = new MessageEmbed()
        //.setAuthor({name: " "})
        .setTitle("2")
        .setColor(0x515151)
        .setImage(`https://thisanimedoesnotexist.ai/results/psi-1.0/seed${seed}.png`)

        const embed3 = new MessageEmbed()
        //.setAuthor({name: " "})
        .setTitle("3")
        .setColor(0x0B0B0B)
        .setImage(`https://thisanimedoesnotexist.ai/results/psi-1.6/seed${seed}.png`)
        .setFooter({text:`(Warning, some images may not be safe for work or generate properly. This command takes from randomly generated images from https://thisanimedoesnotexist.ai/. All content belongs to them. Seed: ${seed})`})
        let embeds = [embed1,embed2,embed3]
        console.log(seed)
        return embeds
        
    },

} as ICommand