 let getUser = (id, callback) => {
   user = {
     id: id,
     name: 'Mark'
   };

   setTimeout(() => {
     callback(user);
   }, 3000);
 }

 getUser(1, (user) => {
   console.log(user);
 });
