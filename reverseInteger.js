const n = 123

function reverseInt(n){

    let rev = 0
    while(n > 0){

        const lastDigit = n % 10
        rev = ( rev * 10) + lastDigit

        n = Math.floor(n/10)
    }
    console.log(rev)
}

reverseInt(n)