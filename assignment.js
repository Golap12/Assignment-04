// function calculateMoney(ticketSale) {
//     if (ticketSale < 0) {
//         return "❗ Invalid Number";
//     }
//     const totalSell = ticketSale * 120;
//     const daroyan1Ta = 500;
//     const staff8Ta = 50 * 8;
//     const totalCost = daroyan1Ta + staff8Ta;
//     const moneyInBaker = totalSell - totalCost;
//     return moneyInBaker;
// }

// const result = calculateMoney(3);
// console.log(result);


// function checkName(name) {

//   if (typeof name !== 'string') {
//       return "Invalid";
//   }
//   const lowerCase = name.toLowerCase();
//   const lastChar = lowerCase[lowerCase.length - 1];
//   const arr = ["a", "y", "i", "e", "o", "u", "w"];
//   if (arr.includes(lastChar)) {
//       return "Good Name";
//   }
//   else {
//       return "Bad Name";
//   }
// }
// const result = checkName('nurulla');
// console.log(result);



// function deleteInvalids(array) {
//     if (!Array.isArray(array)){
//       return "❗Invalid Array [Please input a valid array]";
//     }
//     const number = [];
//     for (const item of array) {
//       if (typeof item === 'number' && !isNaN(item)) {
//         number.push(item);
//       }
//     }
//     return number;
//   }
//   const result = deleteInvalids([ 1 , 2 , -3 ]);
//   console.log(result);


// function password(obj) {
//   const name = obj.name;
//   const birthYear = obj.birthYear;
//   const siteName = obj.siteName;
//   const value = obj.name && obj.birthYear && obj.siteName;

//   if(value === undefined){
//     return "invalid";
//   }

//   const birthYearString = birthYear.toString();
//   if (birthYearString.length !== 4) {
//     return "invalid";
//   }

//   const capitalSiteChar = siteName[0].toUpperCase() + siteName.slice(1);
  
//   const pass = capitalSiteChar + "#" + name + "@" + birthYear;
//   return pass;
//   }
//   const result = password ({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' });
//   console.log(result);



function monthlySavings(allPayments, livingCost) {
  if (!Array.isArray(allPayments) || typeof livingCost !== 'number') {
      return "invalid input";
  }
  let withOutTax = 0;
  let savings = 0;
  for (const value of allPayments) {
      if (value >= 3000) {
          const tax20 = value * 0.20;
          const taxValue = value - tax20;
          allPayments[allPayments.indexOf(value)] = taxValue;
      }
  }
  
  for (const salary of allPayments) {
      withOutTax += salary;
  }
  savings = withOutTax - livingCost;
  if (savings < 0) {
      return "earn more";
  }
  else {
      return savings;
  }
}

const result = monthlySavings([ 1000 , 2000 , 3000 ] , 5400);
console.log(result);