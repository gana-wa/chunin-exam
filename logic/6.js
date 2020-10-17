// // versi pake 0
// const fibonacciNumber = (number) => {
//   let list = [0, 1];
//   for (let i = 2; i <= number; i++) {
//     list.push(list[i - 1] + list[i - 2]);
//   }
//   console.log(list.join(", "));
// }

// versi gapake 0
const fibonacciNumber = (number) => {
   let list = [1, 1];
   for (let i = 2; i < number; i++) {
      list.push(list[i - 1] + list[i - 2]);
   }
   console.log(list.join(", "));
}

fibonacciNumber(11);