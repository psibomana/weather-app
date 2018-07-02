let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      } else {
        reject('Must be functions');
      }
    }, 1500);
    
  });
}


asyncAdd(5, 7).then((res) => {
    console.log('Success:', res)
}, (errorMessage) => {
  console.log('Error: ', errorMessage)
});


let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This worked..... ');
    // reject('This did not work!');
  }, 2500);
});

promise.then((message) => {
  console.log('Success:', message)
}, (errorMessage) => {
  console.log('Error: ', errorMessage)
});
