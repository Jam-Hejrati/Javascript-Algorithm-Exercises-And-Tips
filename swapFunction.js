const doubleSwap = (str, firstLetter, secondLetter) => {
    let strArr = str.split('')
    for (let i = 0; i <= strArr.length; i++) {
        if (strArr[i] === firstLetter) {
            strArr[i] = secondLetter
        } else if (strArr[i] === secondLetter) {
            strArr[i] = firstLetter
        }
    }
    console.log(strArr.join(''))
}

doubleSwap('128 895 556 788 999', '8', '9')
doubleSwap('this is a test string' , 'i' , 's')
