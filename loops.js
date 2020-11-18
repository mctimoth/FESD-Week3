//loops.js
//A while loop printing all even number from 0 to 100
console.log("BEGIN 6a")
var i = 2;
while (i <= 100) {
    console.log(i);
    i += 2;
}
console.log("END 6a")


// A while loop printing every third number
// decrementing by 3 from 100 to 0 inclusive
console.log("BEGIN 6b")
i = 100;
while (i >= 0) {
    console.log(i);
    i -= 3;
}
console.log("END 6b")


// A for loop printing every other number
// from 1 to 100
console.log("BEGIN 6c")
for (i = 1;i <= 100;i += 2){
    console.log(i);
}
console.log("END 6c")


// A for loop printing every number conditionally:
// if the modulus of i and 3 is 0 print Hello
// if the modulus of i and 5 is 0 print World
// if the modulus of i and 3 and i and 5 is 0
// print Hello World
// otherwise print i
console.log("BEGIN 6d");
for (i = 0;i <= 100;i ++){
    if(i % 3 == 0){
        if(i % 5 == 0){
            console.log("Hello World");
        }else{
            console.log("Hello");
        }
    }else if(i % 5 == 0){
        if(i % 3 == 0){
            console.log("Hello World");
        }else{
            console.log("World");
        }
    }else{
        console.log(i);
    }
}
var end1 = new Date().getTime();
console.log("END 6d")

