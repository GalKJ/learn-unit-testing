// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

// function makeUrl(name) {
//   return "https://pokeapi.co/api/v2/" + name;
// }

// *******************

function searchParamsToObject (url) {
  return new URLSearchParams(url);
}

searchParamsToObject();