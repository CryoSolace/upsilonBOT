// let seed = 1234
// let lol='seed'
// if (((seed).toString()).length != 5) {
//     seed = (seed.toString()).padStart(5,"00000");
// }
// console.log(seed)



//THIS WORKS!!
// let age = 30;
// const date = [new Date().getDate(),new Date().getMonth(),new Date().getFullYear()];
// const bday = [0,0,0]
// console.log((date).toString())


// bday[1] = 5//Math.ceil(Math.random() * 12)
// // generate a month first
// month = bday[1]

// if (bday[1] < date[1]) { // if month is before the current month
//     bday[2] = date[2] - age // set the year to subtract age
//     let monthCap = (month in [4,6,9,11]) ? (30) :((month == 2) ? (bday[2] % 4 == 0 ? 29 : 28) : 31)
//     bday[0] = Math.ceil(Math.random() * (monthCap))
// } else if (bday[1] > date[1]) { // if after
//     bday[2] = date[2] - age - 1 // set the year to subtract age and also a 1
//     let monthCap = (month in [4,6,9,11]) ? (30) :((month == 2) ? (bday[2] % 4 == 0 ? 29 : 28) : 31)
//     bday[0] = Math.ceil(Math.random() * (monthCap)) 
// } else { // if equal to the age
//     let sameYear = Math.random() > 0.5 ? true : false
//     bday[2] = sameYear ? date[2] - age : date[2] - age - 1 // choose the year by chance
//     let monthCap = (month in [4,6,9,11]) ? (30) :((month == 2) ? (bday[2] % 4 == 0 ? 29 : 28) : 31) // choose the day by funky method
//     bday[0] = sameYear ? Math.ceil(Math.random() * date[0]) : Math.ceil(Math.random() * (monthCap - date[0])) +  date[0] // spaghetti code
// }




// bday[2] = date[2] - age

//let sameYear = true//Math.random() > 0.5 ? true : false;

// function bdayDay(month) {
//     let limiter = month == date[1] ? date[0] : 0;
//     if (month in [4,6,9,11]) { // 30
//         return Math.ceil(Math.random() * 30)
//     }
//     else if (month === 2) {
//         return (date[2] % 4 == 0) ? Math.ceil(Math.random() * 29) :  Math.ceil(Math.random() * 28) // 29 or 28
//     } 
//     else {return Math.ceil(Math.random() * 31)} // 31 days 
// } 

// // if (sameYear) {

// } else {

// }

// june 20 2020 june 21 2022

//console.log((bday).toString())
// june 6 2022
//  jan 1 2020 to june 6 2020 sameyear true 
// june 7 2019 to dec 31 2019 sameyear false

var first = "mary"
var second = "james"
var base = first+"loves"+second
var list1 = base.split("")
list1 = list1.filter(x => x !== " ")
var list2 = []
var temp = 0
var count = 0

// list1.forEach(element => {
//     let main = element

//     list1.forEach(element => {
//         if (main == element) {
//             count++ 
//         }
//     })
//     list2.push(count)
//     temp.push(list1)
//     list1 = list1.filter(x => x !== main)
//     count = 0
// });

while (list1.length != 0) {
    let main = list1[0]
    //console.log(list1,list2)
    list1.forEach(same => {same == main ? count++ : count = count})
    list2.push(count)
    list1.shift()
    list1 = list1.filter(x => x !== main)
    count = 0

}
//console.log(list1,list2)

// //temp.forEach(inp => {console.log(inp)})
list1 = [0,0]
while (true){
    while (true) {
       if (list2.length == 1 || list2.length == 0) {list1.push(list2[0]);list2.splice(0,1); break}
         list1.push(list2[0]+list2[list2.length-1])
         list2.splice(list2.length-1,1)
         list2.splice(0,1)
    }
    list1 = list1.filter(x => x !== 0 && x !== undefined)
    if (list1.length <= 2) {break}
    //console.log(list1,list2)
    while (true) {
        if (list1.length == 1 || list1.length == 0) {list2.push(list1[0]);list1.splice(0,1); break}
          list2.push(list1[0]+list1[list1.length-1])
          list1.splice(list1.length-1,1)
          list1.splice(0,1)
     }
     list2 = list2.filter(x => x !== 0 && x !== undefined)
     if (list2.length <= 2) {break}
     //console.log(list1,list2)
//     while (true) {
//         if (list1.length == 1) {list1.push(list2[0]); break}
//         list1.push(list2[0]+list2[list2.length-1])
//         list2.splice(list2.length-1,1)
//         list2.splice(0,1)
//     }
}
//console.log(list1,list2)

if (list1) {
    var percent =  list1.join("")
} else {var percent = list2.join("")}

while (parseInt(percent) > 100 ) {
    percent = percent.split(""); 
    percent[0] = parseInt(percent[0])+parseInt(percent[percent.length-1]); 
    percent.pop()
    percent = percent.join("")
}
console.log(percent)