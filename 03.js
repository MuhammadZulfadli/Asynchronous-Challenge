// for (let i = 1; i <= 3; i++) {
//     setTimeout(() => {
  
//     }, 1000);
//     console.log(i)
//   }
  
//   console.log('Done')

for (let i = 1; i <= 3; i++) {
    console.log(i);
    const a = () =>{
      return new Promise(resolv => {
        setTimeout(() => {
          resolv()
        }, 1000);
        console.log(i)
      })
    }
    await (a);
  }
  
  console.log('Done')



