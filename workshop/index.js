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
//     return [obj.email, obj.name];

// }

// searchParamsToObject("name=oliver&email=hello@oliverjam.es");

// *************************

// function to check leap year

function isLeapYear(year) {

    //three conditions to find out the leap year
    if (year === NaN) {
        console.error(year + ' is not a number');
        return false;
    } else 
    if (year < 0) {
        console.error(year + ' must be a positive number');
        return false;
    
    } else if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
        return true;
    } else {
        console.error(year + ' is not a leap year');
        return false; 
    }
}



// isLeapYear(2000);