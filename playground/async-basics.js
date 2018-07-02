console.log('Starting App');


setTimeout(() => {
  console.log("Inside the callback");
}, 2000);

setTimeout(() => {
  console.log("Inside the 0 callback");
}, 0);



console.log('Finishing Up');
