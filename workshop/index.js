// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

// function makeUrl(name) {
//   return "https://pokeapi.co/api/v2/" + name;
// }

// *******************

function searchParamsToObject (url) {
 const objInstance =  new URLSearchParams(url);
  console.log(objInstance);
}

searchParamsToObject("name=oliver&email=hello@oliverjam.es");

