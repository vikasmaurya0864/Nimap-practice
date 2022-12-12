// const express = require('express');
// const app = express();
// const date = new Date();
// const port = process.env.PORT || 3000;
// let america = date.toLocaleString('en',{timeZone:'America/New_York'});
// let africa = date.toLocaleString('en',{timeZone:'Africa/Bangui'});
// let australia = date.toLocaleString('en',{timeZone:'Australia/Canberra'});
// let germany = date.toLocaleString('en',{timeZone:'Europe/Berlin'});
// let greece = date.toLocaleString('en',{timeZone:'Europe/Athens'});
// app.get('/gettime/:country',(req, res)=>{
//     const country=req.params.country
//     switch(country){
//         case "america": return res.send(america);
//         case "africa":  return res.send(africa)
//         case "australia":  return res.send(australia)
//         case "germany":  return res.send(germany)
//         case "greece":  return res.send(greece)
//     }
//     res.send(country)
// })
// app.listen(port,()=>{
//     console.log("server is listening on port",port);
// })
// let date = new Date();
// console.log(date.toLocaleString());
// function sum(a,b){               //named function
//    return a + b;
// }
// console.log(sum(5,5));

// let multiply = (x,y)=>{              //anomynous function
//     return x * y;
// }
// console.log(multiply(5,5));

// (function add(c,d){                 //immediately invoked functions(IIFS)
//     let p = c + d;
//     console.log(p);
// }(10,2))

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// app.get('/',(req, res)=>{
//     res.send('welcome');
// })
// app.get('/courses/:id',(req, res)=>{
//     res.send(req.params.id);
// })
// app.get('/courses/:id/:year',(req, res)=>{
//     res.send(req.query.name);
// })
// app.listen(port,()=>{
//     console.log("listening");
// })





















