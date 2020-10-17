const countHandshake = (people) => {
   // let count = people * (people - 1) / 2
   // console.log(`result: ${count}`)
   let count = [];
   for (let i = 1; i < people; i++) {
      count.push(i)
   }
   console.log(count.reduce((total, currentNumber) => { return total + currentNumber }, 0));
};

countHandshake(6);