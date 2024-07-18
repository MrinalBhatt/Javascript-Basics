function displayName(name){
    console.log("Your name is : " + name);
}
function syncCallback(callback){
    var name = "dave"
    console.log("executed 1st");
    callback(name);
    console.log("executed last");
}
syncCallback(displayName);