
    function resolveAfter2Seconds() {
        return  new Promise(resolve => {
          setTimeout(() => {
            resolve('skc@gmail.com');
          }, 2000);
        });
      }
      
      async function asyncCall() {
        console.log('calling');
        console.log("waiting")
        const result = await resolveAfter2Seconds();
        console.log("Waiting completed")
        console.log(result);
       
      }
      
      asyncCall();
