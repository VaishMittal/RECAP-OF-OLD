// function aa(){
//     console.log("aaaa")
// }
// setTimeout(aa,2000);

// (function(){
//     console.log("bbbb")
// })();
//this is a IIfe 

//through constructor
// let a =new Function(console.log("constructor"));

// let b= ()=>{
//     console.log("fourth");
// }

// function roll(num){
//     console.log("roll no. is:",num)
// }
// setTimeout(roll,2000,62);

// function roll(num,delay,nextroll){
//     setTimeout(()=>{
//         console.log("roll no. is:",num);
//         if(nextroll) nextroll();
//     },delay)

// }
// roll(12,1000,()=>{
//     roll(23,2000,()=>{
//         roll(44,3000);
//     })
// })
//callback hell
//this is a problem hell

//to solve this we use promise
//  const promise =new Promise(function(resolve,reject){
//     console.log("my first promise");
//     resolve("Resolved");
//     reject("Rejected")

//  })

//  promise.then(console.log)  
// promise.catch(console.log)  
 //to print resolve msg  and if resolve has nothing it will print undefined

//  promise.then(()=>{
//     console.log("my first then");
//  }).catch(()=>{
//     console.log("my first catch")
//  })

// let promise1 =function getPromise(){
//     return new promise((resolve,reject)=>{
//         resolve("promise resolved from function!")
//     })
// }
// promise1.then(result=>{
//     console.log(result)
// })


// function roll(num,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject();
//             console.log("roll no. is:",num);
//         },delay)
//     })
// }


//here when we do catch it will work only if there is chaining if no chaining func will run
// roll(123,2000).catch(()=>{console.log("error is there")})


// roll(1,1000).then(()=>{
//     roll(2,2000).then(()=>{
//         roll(3,3000).then(()=>{
//             roll(4,2000).then(()=>{
//                 console.log("all roll numbers are done")
//             })
//         })
//     })
// }).catch(()=>{
//     console.log("there is an error")})



// let promise =new Promise((resolve,reject)=>{
//     resolve({name:"vaish",branch:"CE"})
// })

// promise.then((data)=>{
//     console.log(data);
//     return data;
// }).then((res)=>{
//     console.log(res.name)
// }).catch(()=>{
//     console.log("this is an error");
// }).finally(()=>{
//     console.log("this is finally")
// })

//using async await


// function roll(num,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve();
//             console.log("roll no. is:",num);
//         },delay)
//     })
// }

// async function getRoll(){
//     await roll(12,1000);
//     await roll(32,1000);
//     await roll(42,1000);
//     await roll(52,1000);


// }
// getRoll();

// function orderFood(item,time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // reject();
//             resolve();
//             console.log(`your ${item} is ready in ${time}`);
//         },time)
//     })
// }

//using then

// orderFood("idli",1000).then(()=>{
//     orderFood("pizza",2000).then(()=>{
//         orderFood("dosa",3000).catch(()=>{
//             console.log("there is an eror")
//         }).finally(()=>{
//             console.log("this is a finally")
//         })
//     })
// })


//using async await


// async function restro(){
//     try{
//         await orderFood("idli",1000);
//         await orderFood("dosa",1000);
//         await orderFood("piza",1000);
//         await orderFood("maggie",1000);
//     }
//     catch{
//         console.log("error is there")
//     }
  

// }
// restro();


//FETCH FUNCTION