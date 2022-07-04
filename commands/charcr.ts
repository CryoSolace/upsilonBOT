import { MessageEmbed } from "discord.js";
import { parse } from "dotenv";
import { ICommand } from "wokcommands";

const allLists = require("../upsilfcharcr/dnddata.ts");
const traits_ = allLists.vars().traits
const ideals_ = allLists.vars().ideals
const bonds_ = allLists.vars().bonds
const flaws_ = allLists.vars().flaws
const maleFirstnames_ = allLists.vars().maleFirstnames
const femaleFirstnames_ = allLists.vars().femaleFirstnames
const lastnames_ = allLists.vars().lastnames
//const characteristics_ = allLists.vars().characteristics
//const spells_ = allLists.vars().spells

// console.log(allLists.vars());
// console.log(allLists.vars().characteristics)

// var characteristics = [
//     "Strength",
//     "Dexterity",
//     "Consitution",
//     "Intelligence",
//     "Wisdom",
//     "Charisma"
// ]


//https://fakeface.rest/face/json?gender=female&minimum_age=16&maximum_age=20
function getPic(gen:String,age:number) {
    return fetch(`https://fakeface.rest/face/json?gender=${gen}&minimum_age=${age-5}&maximum_age=${age+5}`)//https://zenquotes.io/api/random")
    .then(pic => {
        return pic.json();
    })
    .then(split => {
        //
        //const obj = JSON.parse(split)
        const url = split.image_url
        return (url).toString();// + "@@" + split[0]["a"];
        //return {quote,author};
    })
 
}

export default {
    category: "Fun",
    description: "Creates a randomly generated character.",
    slash: true,
    testOnly: true,

    callback: async ({message, text}) => {
        var gender = "";
         // ------------------------------------ names
        var lastName = " " + lastnames_[Math.floor(Math.random() * lastnames_.length)];
        var charName = Math.random() > 0.5 ? maleFirstnames_[Math.floor(Math.random() * maleFirstnames_.length)] : femaleFirstnames_[Math.floor(Math.random() * femaleFirstnames_.length)]
        let orgGender= "male";
         // ------------------------------------ gender
        if (maleFirstnames_.includes(charName)) { // 10% chance to be other gender
            orgGender = "male";
            gender = Math.random() > 0.9 ? "Female":"Male";
        } else {
            orgGender = "female";
            gender = Math.random() > 0.9 ? "Male":"Female" ;
        }


        // charName = Math.random() > 0 && maleFirstnames_.includes(charName) ? 
        //     charName + " " + maleFirstnames_[Math.floor(Math.random() * maleFirstnames_.length)] :
        //     charName 

        // charName = Math.random() > 0 && femaleFirstnames_.includes(charName) ? 
        //     charName + " " + femaleFirstnames_[Math.floor(Math.random() * femaleFirstnames_.length)] :
        //     charName 
        
        //console.log(charName, (maleFirstnames_.includes(charName) ), (femaleFirstnames_.includes(charName) ))

        charName = Math.random() > 0.75 && maleFirstnames_.includes(charName) ? // 25% chance to generate 2nd name, 5% to generate 3rd
            (Math.random() > 0.80 ? charName + " " + maleFirstnames_[Math.floor(Math.random() * maleFirstnames_.length)] + " " + maleFirstnames_[Math.floor(Math.random() * maleFirstnames_.length)]: 
            charName + " " + maleFirstnames_[Math.floor(Math.random() * maleFirstnames_.length)]) :
            charName 

        charName = Math.random() > 0.75 && femaleFirstnames_.includes(charName) ? // 25% chance to generate 2nd name, 25% x 20% to generate 3rd
            (Math.random() > 0.80 ? charName + " " + femaleFirstnames_[Math.floor(Math.random() * femaleFirstnames_.length)] + " " + femaleFirstnames_[Math.floor(Math.random() * femaleFirstnames_.length)] : 
            charName + " " + femaleFirstnames_[Math.floor(Math.random() * femaleFirstnames_.length)]) :
            charName 

        charName += lastName;

        // ------------------------------------ aliasing
        var aliasString = "";

        if (gender == "Male") { 
            maleFirstnames_.splice(maleFirstnames_.indexOf(charName),1); // removes the name from the list so its not repeated in the aliases
            for (let i = 0; i < Math.floor(Math.random()*3)+0; i++){  // 0-3 aliases
                let x = maleFirstnames_[Math.floor(Math.random() * maleFirstnames_.length)]; 
                aliasString = Math.random() > 0.7 ? x + "\n" : aliasString; // 30% chance for the alias to get added
                maleFirstnames_.splice(maleFirstnames_.indexOf(x),1); 
            }
        } else {
            //gender = Math.random() > 0.9 ? "Male":"Female" 
            femaleFirstnames_.splice(femaleFirstnames_.indexOf(charName),1);
            for (let i = 0; i < Math.floor(Math.random()*3)+0; i++){ 
                let x = femaleFirstnames_[Math.floor(Math.random() * femaleFirstnames_.length)];
                aliasString = Math.random() > 0.7 ? x + "\n" : aliasString; // 30% chance for the alias to get added
                femaleFirstnames_.splice(femaleFirstnames_.indexOf(x),1); 
            }
        }
        if (aliasString == "") { // in case none appear, no known aliases.
            aliasString = "No known aliases."
        }

         // ------------------------------------ features
        var traitsString = "";
        for (let i = 0; i < Math.floor(Math.random()*3)+1; i++){ // for loop returns 1 to 3 traits at random to traitsList
            let x = traits_[Math.floor(Math.random() * traits_.length)];
            traitsString += x + "\n\n"; // adds to traitsString
            traits_.splice(traits_.indexOf(x),1); // ensures no repeats
        }

        var idealsString = "";
        for (let i = 0; i < Math.floor(Math.random()*2)+1; i++){ // for loop returns 1 to 2 ideals at random to idealsString
            let x = ideals_[Math.floor(Math.random() * ideals_.length)];
            idealsString += x + "\n\n"; // adds to idealsString
            ideals_.splice(ideals_.indexOf(x),1); // ensures no repeats
        }

        var bondsString = "";
        for (let i = 0; i < Math.floor(Math.random()*3)+1; i++){ // for loop returns 1 to 3 bonds at random to bondsString
            let x = bonds_[Math.floor(Math.random() * bonds_.length)];
            bondsString += x + "\n\n"; // adds to bondsString
            bonds_.splice(bonds_.indexOf(x),1); // ensures no repeats
        }

        var flawsString = ""
        for (let i = 0; i < Math.floor(Math.random()*2)+1; i++){ // for loop returns 1 to 2 flaws at random to flawsString
            let x = flaws_[Math.floor(Math.random() * flaws_.length)];
            flawsString += x + "\n\n"; // adds to flawsString
            flaws_.splice(flaws_.indexOf(x),1); // ensures no repeats
        }

         // ------------------------------------ abilities and grading
        const strPercent = parseFloat((Math.random() * 100).toFixed(2));
        const dexPercent = parseFloat((Math.random() * 100).toFixed(2));
        const conPercent = parseFloat((Math.random() * 100).toFixed(2));
        const chrPercent = parseFloat((Math.random() * 100).toFixed(2));

        const intPercent = Math.random() > 0.45 ? parseFloat((Math.random() * 60).toFixed(2)) : parseFloat((Math.random() * 40 + 60).toFixed(2)); //60% chance to have lower than 60% wis 
        const wisPercent = Math.random() > 0.4 ? parseFloat((Math.random() * 60).toFixed(2)) : parseFloat((Math.random() * 40 + 60).toFixed(2)); //60% chance to have lower than 60% wis 
        const totPercent = parseFloat(((strPercent+dexPercent+conPercent+chrPercent+intPercent*1.2+wisPercent*1.2)/6).toFixed(2)); // weighting on wis and int percent, so *1.2 to compensate
        var totGrade = "";

        if (totPercent > 90) {
            totGrade = "S+"
        } else if (totPercent > 80) {
            totGrade = "S"
        } else if (totPercent > 70) {
            totGrade = "A"
        } else if (totPercent > 50) {
            totGrade = "B"
        } else if (totPercent > 40) {
            totGrade = "C"
        } else if (totPercent > 20) {
            totGrade = "D"
        } else {
            totGrade = "F"
        }

         // ------------------------------------ age 
        var lowerAge = 10; // base case 10 and 80 range of age
        var upperAge = 80;

        if (intPercent > 55) { // if int percent is more than 55, tighten the range
            lowerAge = 18;
            upperAge = 70;
            if (wisPercent > 80) {
                lowerAge = 50; // if wis percent is more than 55, 80, increase lower age
            } else if (wisPercent > 55) {
                lowerAge = 30; 
            } else if (wisPercent < 30) {
                upperAge = 30; // if wis percent is more than 55, 80, increase lower age
            }
        } 

        if (strPercent > 70) {
            lowerAge = 18;
            upperAge = 50;
        }
        
        const age = (Math.floor(Math.random()*(upperAge-lowerAge))+lowerAge); // const age is set as a random number between lower and upper
        //console.log(age, upperAge, lowerAge);

        //var randPercent = (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)/100); // generates a number format XX.XX

        //  ------------------------------------ birthday

        const date = [new Date().getDate(),new Date().getMonth(),new Date().getFullYear()];
        const bday = [0,0,0]

        bday[1] = Math.ceil(Math.random() * 12)// generate a month first
        let month = bday[1]

        // spaghetti code
        if (bday[1] < date[1]) { // if month is before the current month
            bday[2] = date[2] - age // set the year to subtract age
            let monthCap = (month in [4,6,9,11]) ? (30) :((month == 2) ? (bday[2] % 4 == 0 ? 29 : 28) : 31)
            bday[0] = Math.ceil(Math.random() * (monthCap))
        } else if (bday[1] > date[1]) { // if after
            bday[2] = date[2] - age - 1 // set the year to subtract age and also a 1
            let monthCap = (month in [4,6,9,11]) ? (30) :((month == 2) ? (bday[2] % 4 == 0 ? 29 : 28) : 31)
            bday[0] = Math.ceil(Math.random() * (monthCap)) 
        } else { // if equal to the age
            let sameYear = Math.random() > 0.5 ? true : false
            bday[2] = sameYear ? date[2] - age : date[2] - age - 1 // choose the year by chance
            let monthCap = (month in [4,6,9,11]) ? (30) :((month == 2) ? (bday[2] % 4 == 0 ? 29 : 28) : 31) // choose the day by funky method
            bday[0] = sameYear ? Math.ceil(Math.random() * date[0]) : Math.ceil(Math.random() * (monthCap - date[0])) +  date[0] 
        }



        const embed = new MessageEmbed() // embed construct 
            .setAuthor({name: " "}) // author and footer deprecated, must now use objects
            .setTitle(String(`Profile: ${charName}`)) 
            .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])

            .setDescription(`**Personality:**\n${traitsString}`)
            .setThumbnail(`${(await getPic(orgGender,age).then()).toString()}`)
            .addFields([
                {
                    name:".",
                    value:" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -",
                    inline:false,
                },
                {
                    name:"\n\n**Features**",
                    value:" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -",
                    inline:false,
                },
                {
                    name:"Age, Birthday",
                    value:`${(age)} - ${bday[0]}/${bday[1]}/${bday[2]}`,
                    inline:true,
                },   
                {
                    name:"Gender",
                    value:`${(gender)}`,
                    inline:true,
                },   
                {
                    name:"Aliases",
                    value:`${(aliasString)}`,
                    inline:true,
                },   
                {
                    name:"Ideals",
                    value:`${(idealsString)}`,
                    inline:true,
                },    
                {
                    name:"Bonds",
                    value:`${(bondsString)}`,
                    inline:true,
                },    
                {
                    name:"Flaws",
                    value:`${(flawsString)}`,
                    inline:true,
                },    
                    
            ])

            .addFields([
                {
                    name:".",
                    value:" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -",
                    inline:false,
                },
                {
                    name:"\n\n**Characteristics Aptitudes**",
                    value:" - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -",
                    inline:false,
                },
                {
                    name:"Strength",
                    value:`${strPercent}%`,
                    inline:true,
                },
                {
                    name:"Dexterity",
                    value:`${dexPercent}%`,
                    inline:true,
                },
                {
                    name:"Constitution",
                    value:`${conPercent}%`,
                    inline:true,
                },
                {
                    name:"Intelligence",
                    value:`${intPercent}%`,
                    inline:true,
                },
                {
                    name:"Wisdom",
                    value:`${wisPercent}%`,
                    inline:true,
                },
                {
                    name:"Charisma",
                    value:`${chrPercent}%`,
                    inline:true,
                },
                {
                    name:"Grade",
                    value:`Average: ${parseFloat(((strPercent+dexPercent+conPercent+chrPercent+intPercent+wisPercent)/6).toFixed(2))}%, Class: ${totGrade}`,
                    inline:true,
                },
            
            ])


            .setFooter({text: "Upsilon's Character Creator"})
        
        return embed;
    },
} as ICommand