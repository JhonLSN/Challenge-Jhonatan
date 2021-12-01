// CHALLENGE 01
console.log('CHALLENGE 01 ---------------------------------------')

let index = 13;
let soma = 0;
let k = 0;

while(k<index){
  k++;  
  soma = soma + k;
}

console.log(`The value of variable SOMA is: ${soma}`) // 91

// CHALLENGE 02
console.log('CHALLENGE 02 ---------------------------------------')
let i;
let fib = []; // Initialize array!
let numberUser = 610; // Number of user***

fib[0] = 0;
fib[1] = 1;

// Taking into account that in the sequence it goes up to 20 numbers
for (i = 2; i <= 20; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}

console.log(`Our sequence is: ${fib}`)

if(fib.includes(numberUser) === true){
  console.log(`The value is in the sequence and index ${fib.indexOf(numberUser)}`)
}else{
  console.log('Not part of the sequence')
}

// CHALLENGE 03
console.log('CHALLENGE 03 ---------------------------------------')

let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let others = 19849.53;
let total = sp + rj + mg + es + others;

let percentageSP = (sp*100)/total;
let percentageRJ = (rj*100)/total;
let percentageMG = (mg*100)/total;
let percentageES = (es*100)/total;
let percentageOthers = (others*100)/total;

console.log(`Total of distributor is ${total}`)
console.log(`Percentage of SP is ${percentageSP.toFixed(0)}%`)
console.log(`Percentage of RJ is ${percentageRJ.toFixed(0)}%`)
console.log(`Percentage of MG is ${percentageMG.toFixed(0)}%`)
console.log(`Percentage of ES is ${percentageES.toFixed(0)}%`)
console.log(`Percentage of other is ${percentageOthers.toFixed(0)}%`)


// CHALLENGE 04
console.log('CHALLENGE 04 ---------------------------------------')

let inputUser = 'Target Sistemas'

function inverter(str) {
  let x = '';
  for (var i = str.length - 1; i >= 0; i--) {
      x += str[i];
  }
  return x;
}
console.log(inverter(inputUser));


