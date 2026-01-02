let digit = 25611

let count = 0 

while ( digit > 0 ){

    digit = Math.floor(digit / 10)
    count++
}

console.log(count)