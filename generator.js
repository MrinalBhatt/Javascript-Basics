function* genratorNumber(){
    var id = 1;
    while(true){
        var increment =  yield id;
        if(increment != null){
            id += increment;
        }else{
            id++;
        }
    }
}

var g = genratorNumber();
console.log(g.next())
console.log(g.next(4))
console.log(g.next())
