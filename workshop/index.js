// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

// function makeUrl(name) {
//   return "https://pokeapi.co/api/v2/" + name;
// }

// *******************

// function searchParamsToObject (url) {
//  const objInstance =  new URLSearchParams(url);
//  const obj = Object.fromEntries(objInstance); 
//  console.log(Array.isArray(obj))
//  console.log(objInstance instanceof URLSearchParams)//true
//  console.log(objInstance instanceof Object)//true
//  console.log(obj.name);
//  console.log(Object.entries(obj));
//  console.log(typeof(obj));
//     return obj;

// }

// searchParamsToObject("name=oliver&email=hello@oliverjam.es");

// *************************

// function to check leap year

function isLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');



isLeapYear(year);