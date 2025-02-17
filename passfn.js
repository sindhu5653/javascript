//Call Back Function
// ---------------------
// function firstFunction(name,callback){
//     console.log(name);
//     callback();
//     console.log('firstFunction');
// }
// function secondFunction(){
//     console.log('This is second function');
// }
// firstFunction('Synnefo',secondFunction);

setTimeout(function(){
    console.log('This is a callback function');
    },2000);

    // setInterval(function(){
    //     console.log('This is a callback function');
    //     },2000);
       