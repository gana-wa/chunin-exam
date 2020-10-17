const cetakGambar = (ukuran) => {
   if (typeof (ukuran) === "number" && ukuran % 2 === 1) {
      for (let i = 1; i <= ukuran; i++) {
         let cetak = '';
         if (i === Math.ceil(ukuran / 2)) {
            for (let j = 1; j <= ukuran; j++) {
               cetak += "* "
            }
            console.log(cetak)
         } else {
            for (let j = 1; j <= ukuran; j++) {
               if (j === 1 || j === ukuran) {
                  cetak += "* "
               } else {
                  cetak += "= "
               }
            }
            console.log(cetak)
         }
      }
   } else {
      console.log('Parameter harus merupakan bilangan ganjil..!')
   }
};

cetakGambar(5);