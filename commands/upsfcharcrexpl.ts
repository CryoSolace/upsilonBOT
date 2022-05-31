import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

// var characteristics = [
//     "Strength",
//     "Dexterity",
//     "Consitution",
//     "Intelligence",
//     "Wisdom",
//     "Charisma"
// ]





export default {
    category: "MainComms",
    description: "Explains UCC.",
    permissions:["ADMINISTRATOR"],
    slash: true,
    testOnly: true,

    callback: async ({message, text}) => {
        
      
        //var randPercent = (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)/100); // generates a number format XX.XX

        const embed = new MessageEmbed() // embed construct 
            .setAuthor({name: " "}) // author and footer deprecated, must now use objects
            .setTitle("What is Upsilon's Character Creator?") 
            .setColor("DEFAULT")

            .setDescription("UCC is a tool that randomly creates a new character. Specifically, for UFCC, the character is based off fantasy. \n\n The description of the character itself is made from randomly selecting a list of personality traits. The same is done for ideals, bonds, flaws.\n\nIf these look familiar, it's because the generator is based off DND character generation.")
    
            .addFields([
                {
                    name:".",
                    value:" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -",
                    inline:false,
                },
                {
                    name:"\n\n**Features**",
                    value:" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -",
                    inline:false,

                },
                {
                    name:"Age",
                    value:"The character's age (10-80, but can be changed by intelligence and wisdom percentage).",
                    inline:true,
                },   
                {
                    name:"Gender",
                    value:"The character's gender.",
                    inline:true,
                },   
                {
                    name:"Aliases",
                    value:"The character's known alternative names.",
                    inline:true,
                },
                {
                    name:"Ideals (1-2)",
                    value:"The character's moral or ethical values.",
                    inline:true,
                },    
                {
                    name:"Bonds (1-3)",
                    value:"The character's connection to another character, group, location, or object.",
                    inline:true,
                },    
                {
                    name:"Flaws (1-2)",
                    value:"The character's weakness, fear, or vice.",
                    inline:true,
                },        
            ])
            .addFields([
                {
                    name:".",
                    value:" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -",
                    inline:false,
                },
                {
                    name:"\n\n**Characteristics Aptitudes (0-100%)**",
                    value:" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -",
                    inline:false,
                },
                {
                    name:"Strength",
                    value:"Measures physical power.",
                    inline:true,
                },
                {
                    name:"Dexterity",
                    value:"Measures agility.",
                    inline:true,
                },
                {
                    name:"Constitution",
                    value:"Measures endurance.",
                    inline:true,
                },
                {
                    name:"Intelligence",
                    value:"Measures reasoning and memory.",
                    inline:true,
                },
                {
                    name:"Wisdom",
                    value:"Measures perception and insight.",
                    inline:true,
                },
                {
                    name:"Charisma",
                    value:"Measures force of personality.",
                    inline:true,
                },
            
            ])


            .setFooter({text: "Upsilon's Character Creator Explained"})
        
        return embed;
    },
} as ICommand