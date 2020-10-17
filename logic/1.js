const sortChar = (char) => {
   let done = false;
   while (!done) {
      done = true
      for (let i = 1; i <= char.length; i++) {
         if (char[i - 1] > char[i]) {
            done = false
            let temp = char[i - 1];
            char[i - 1] = char[i];
            char[i] = temp;
         }
      }
   }
   console.log(char)
}

sortChar(["z", "d", "a", "b"]);