const recurString = (string) => {
   let splitString = string.split('');
   let searchRecur = splitString.find((value, index, arr) => arr.lastIndexOf(value) !== index);
   console.log(`Karakter pertama yang berulang adalah ${searchRecur}`)
}

recurString("BCABA");