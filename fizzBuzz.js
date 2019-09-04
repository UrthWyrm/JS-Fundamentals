// If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
// If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
// If the number is divisible by 5 but not by 3, log "Buzz" instead of the number

function fizzBuzz(n) {
    for (n=0; n.length; n++) {
        
    } if (n % 15 === 0){
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    }else if (n % 5 === 0){
        return "Buzz";
    }
    return n;
    
}