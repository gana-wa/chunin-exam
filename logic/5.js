const palindrome = (string) => {
   if (typeof (string) !== "string") {
      console.log('Parameter harus bertipe string');
   } else {
      let reverseString = string.toLocaleLowerCase().split("").reverse().join("");
      if (reverseString === string.toLocaleLowerCase()) {
         console.log('String merupakan Palindrome')
      } else {
         console.log('String bukan Palindrome')
      }
   }
};

palindrome("NaNaN");