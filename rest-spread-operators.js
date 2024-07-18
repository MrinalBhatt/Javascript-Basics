function x(...args){
    var sum = 0;
    for(i of args){
        sum = sum + i; 
    }
    return sum;
}
console.log(x(2,3,4,5,6));

obj1 = {name : "saurabh", age : 33, gender: "male"};
obj2 = {...obj1, 1 : "mrinal"}
l1 = [1,2,3,4,5]
console.log(Math.max(...l1))

function test(num1,num2){
    return num1+num2;
}
l2 = [4,5]
console.log(test(...l2))