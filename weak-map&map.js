var weak_map = new WeakMap();
obj1 = {name : "Mrinal", age : 32};
weak_map.set(obj1, 'here is Mrinal');
// obj1 = 0;
console.log(weak_map.get(obj1)); //returns udefine as it object is grabge collected


var objmap = new Map();
obj2 = {name : "Saurabh", age : 33};
objmap.set(obj2, "here is Saurabh");
obj2 = 0;
console.log(objmap.get(obj2))
objmap.forEach((val,key) => {
    console.log(key.name)
})