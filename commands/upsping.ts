
import { ICommand } from "wokcommands";

export default {
    category: "Testing", // ??
    description: "Replies with pong",
    slash: "both", // allows both interaction and message
    testOnly: true, // sets only for the test server

    callback:({interaction, client}) => {  // returns pong for both interaction and message thanks to wokcommands
       interaction.reply(`Pong! ${client.ws.ping}ms.`)
    },
} as ICommand