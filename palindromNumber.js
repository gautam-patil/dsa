const n = -1221

function palindromNumber(n){

    const input = n
    let rev = 0
    while(n > 0){

        const lastDigit = n % 10;

        rev = (10 * rev) + lastDigit
        n = Math.floor(n / 10)
    }

    if(input == rev){
        console.log("Number is plindrom")
    }else{
        console.log("Number is not palindrom")
    }
}

palindromNumber(n)