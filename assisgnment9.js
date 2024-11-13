//....DELAY FUNCTION.....
function delay(ms) {
    return new Promise(function(resolve) {  
        setTimeout(function() {
            resolve();  // The promise is resolved after 'ms' milliseconds
        }, ms);
    });
}



//...FECTCH Data....//
function fectchData(){
    return new Promise(function(resolve,reject){
     setTimeout(function(){
        let randomnumbers=Math.floor((Math.random()*100)+1);
        resolve(randomnumbers);


     },2000);
    })
}
fectchData.then(
    function(data){
        console.log("fetced data:" ,data);
    
})
.catch(
    function( error){
        console.log("Error fecting data:",data);

    })
    
    //...PROCESSDATA ....///
    function processData(data){
        console.log("processed data:" ,data)
        return new Promise(function( resolve,reject){
         setTimeout(function(){
          let result=data*2;
          resolve(result)
         },1000);
        })
    }
    processData(6).then(function(result){
        console.log("result:",result)
    }).catch(function(error){
        console.log("error")
    })

//...PROMISE CHAINING...///


fectchData().then(res=>res).then((result=>processData(result)))

