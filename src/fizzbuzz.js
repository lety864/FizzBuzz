
export function fizzbuzz(){
    let i=1;
    let n = 100;

    while(i<=n){
        if(i%3==0 && i%5==0) {
            console.log("FizzBuzz")
        }else if(i%3==0){
            console.log("Fizz");
        }else if(i%5==0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
        i++;
    }
}

let n = fizzbuzz();
console.log(n);