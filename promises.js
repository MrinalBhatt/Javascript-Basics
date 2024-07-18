function cookTheFood(){
    return new Promise ( (resolve,reject) => {
        var foodCooked = true;
        setTimeout(()=>{
            if(foodCooked){
                resolve("cook The food done!");
            }else{
                reject('cook food remain!')
            }
        },1000)
    })
   
}

function cleanTheKitchen(){
    return new Promise((resolve, reject) => {
        var kitchenClean = false;
    
        setTimeout(()=>{
            if(kitchenClean){
                resolve("cleaning kitchen done!");
            }else{
                reject("clean kitchen remain!");
            }
        },2000)
    })
}
function washThePlates(){
    var washPlates = false;
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(washPlates){
                resolve("Wash the plates done!");
            }else{
                reject("wash the plate remain!")
            }
        },500)
    })
}

cookTheFood().then((value) => {console.log(value); return cleanTheKitchen()})
             .then((value) => {console.log(value); return washThePlates()})
             .then((value) => {console.log(value); console.log('All the tasks are finished!')})
             .catch((error) => {console.error(error)})
             .finally(() => {
                console.log('all the tasks done');
             })