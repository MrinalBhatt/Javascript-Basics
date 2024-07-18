function dosomething(callback){
    setTimeout(()=>{
        var name = "John";
        callback(name);
    },1000);
    console.log("exicuted 1st")
}
function displayName(data){
    console.log("The name is: " + data);
}
dosomething(displayName);