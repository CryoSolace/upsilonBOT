import { Interaction, Collection, MessageActionRow, MessageButton, MessageComponentInteraction } from "discord.js";
import { ICommand } from "wokcommands";

const wait = require('node:timers/promises').setTimeout;

export default {
    category: "testing",
    description:"testing",
    slash:true,
    testOnly:true,

    callback: async ({ interaction: msgInt, channel}) => {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId("ban_yes")
                    .setEmoji("🔨")
                    .setLabel("Confirm")
                    .setStyle("SUCCESS")
            )
            .addComponents(
                new MessageButton()
                    .setCustomId("ban_no")
                    .setLabel("Cancel")
                    .setStyle("DANGER")
            )
        const linkRow = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setURL("https://www.youtube.com/")
                    .setLabel("???")
                    .setStyle("LINK")
            )
        await msgInt.reply({
            content:"Are you sure?",
            components:[row,linkRow],
            ephemeral: true
        })


        const filter = (btnInt: Interaction) => { // video shows this incorrectly
            return (msgInt.user.id === btnInt.user.id);
        }

        const collector = channel.createMessageComponentCollector({
            filter,
            max: 999, // note that for some reason, this doesnt affect how many times the buttons can be pressed.
            time: 1000 * 15 // only works with async?
        })
        
        collector.on( "collect", async (i:MessageComponentInteraction) => {
            await i.deferUpdate();
            i.editReply({
                
                content:"You clicked a button",
                components:[],
                
            })
        })
        
        collector.on("end", (collection) => {
            collection.forEach((click) => {
                console.log(click.user.id, click.customId);
            })

            if (collection.first()?.customId === "ban_yes"){
                console.log("banned");
            }
        })
        //new Promise(resolve => setTimeout(resolve,100000));
        
    }
} as ICommand