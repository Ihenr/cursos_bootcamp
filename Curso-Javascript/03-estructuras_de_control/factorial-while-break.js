//Factorial While-break
let i = 1;
let factorial = 1;


while(i <= 10 ){
    factorial *= i;
    i++;
    if(i === 1){
        break;
    }
}

console.log(factorial);
