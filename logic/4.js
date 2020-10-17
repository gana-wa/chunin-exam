const triangle = (number) => {
   if (typeof (number) === "number" && (number % 2) === 1 && number > 1) {
      for (let i = 1; i <= number; i++) {
         if (i === 1) {
            let print = ""
            for (let j = 1; j < (number * 2); j++) {
               print += 'o'
            }
            console.log(print)
         } else {
            let print = ""
            for (let k = 1; k < (number * 2); k++) {
               if (k === i || k === (number * 2 - i)) {
                  print += "o"
               } else {
                  print += " "
               }
            }
            console.log(print);
         }
      }
   } else {
      console.log('PARAMETER MUST ODD NUMBER & PARAMETER > 1')
   }
}

triangle(5)