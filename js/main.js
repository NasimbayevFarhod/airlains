
// var username = "shahobiddin"

// var text = username[6]

// var resalt = username.charAt(6)

// console.log(username)


// var input = prompt("Matn kiriting: ")

// input.

// if (input = "salom") {
//   console.log("Voalaykum Assalom");
// } else {
//   console.log("yahshimisiz");
// }






// 500505


var pul = prompt("Somda qancha pulingiz bor:")

var dollorSomda = 10975
var yevroSomda = 10400
var biletUSD = 500
var mehmonhonaUSD = 250
var sayohatEUR = 120

var JamiHarajatlarSomda = (biletUSD + mehmonhonaUSD) * dollorSomda + sayohatEUR*yevroSomda

console.log(JamiHarajatlarSomda);

let span = document.querySelector(".span");

  if (JamiHarajatlarSomda <= pul){
    span.innerHTML =  ("Oq yo'l dostim")
  }
  else
  {
    span.innerHTML =  ("Afsuski Mablag'ingiz yitarli emas, Yana ozgina sabir qilishingizga tog'ri kelar ekan")
  }






