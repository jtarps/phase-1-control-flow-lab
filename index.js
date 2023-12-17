function scuberGreetingForFeet(ride){
   let result;
   if (ride <= 400) {
    result = 'This one is on me!'
   } else if (ride > 400 && ride <= 2000 ){
    result = 'Pay me my money'
   } else if (ride > 2000 && ride <= 2500) {
    result = 'I will gladly take your thirty bucks.'
   } else {
    result = 'No can do.'
   }

   return result
}

console.log(scuberGreetingForFeet(1567))

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';

}

console.log(ternaryCheckCity('Toronto'));


function switchOnCharmFromTip(tipAmount){

  switch (tipAmount){
  case 'generous' : 
    return 'Thank you so much.';

  case 'not as generous' : 
    return 'Thank you.';

  default: 
    return 'Bye.';
  }
}

console.log(switchOnCharmFromTip('Generous'))