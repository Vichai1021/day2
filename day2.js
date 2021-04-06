function sayHello(){
  console.log("Hello");
}
sayHello()

function sayGoodbye(name){
  console.log("Goodbye "+ name);
  
}
sayGoodbye("Ali");
sayGoodbye("James");
sayGoodbye("John");

//calculation function

function sum(a,b){
  return a+b;
}

console.log(sum(3,4));
console.log(sum(7,3));
console.log(sum(2,6));

//area volume function

function calculateAreaVolume(length,width,height){
  return[length*width, length*width*height]
}

console.log(calculateAreaVolume(2,3,4));
console.log(calculateAreaVolume(5,9,3));

//Array

var scores=[80,70,60,90,88];
console.log(scores[0]);
console.log(scores[2]);

//diplay the number of scores
console.log(scores.length);

//add a number into the score array 
scores.push(70);
console.log(scores);

//to remove the last score in the array 
scores.pop();
console.log(scores);
scores.pop();
console.log(scores);

//loop in an array
for (var i=0; i<scores.length; i++){
  console.log("Item "+ i + " is " + scores[i]);
}
