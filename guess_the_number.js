//to genrate a random number and let the user guess the number which are equal to chance //
let x = Math.floor((Math.random() * 100) + 1);
//console.log(x)
let chance=0
let a
while(a!=x){
  chance++ 
let a = prompt("guess the number of your choice")
  if(a>x && a<100){
  console.log("the actual number is less the guessed number")
}
    else if(a<x && a>0){
       console.log("the actual number is greater the guessed number")
    }
      else if( a>100 || a<0){
    console.log("Enter the number between 1 to 100")
      }

else 
{
  console.log("you have guessed the correct number")
  let r = parseInt(100-chance) 

console.log("your score is " +r )
}
   
}
 
 
  
   





