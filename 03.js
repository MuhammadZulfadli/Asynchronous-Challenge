// for (let i = 1; i <= 3; i++) {
//     setTimeout(() => {
  
//     }, 1000);
//     console.log(i)
//   }
  
//   console.log('Done')

for (let i = 1; i <= 3; i++) {
    console.log(i);
    const hasil = () =>{
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 1000);
      })
    }
    await (hasil);
  }
  
  console.log('Done')



