const recurString = (string) => {
   let splitString = string.split('');
   let searchRecur = splitString.filter((value, index) => value === value[index]);
   console.log(`Karakter pertama yang berulang adalah ${searchRecur.toString()}`)
}

recurString("BCABA");