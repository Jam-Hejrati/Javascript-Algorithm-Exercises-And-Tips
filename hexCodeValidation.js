'use strict'

const hexCodeCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const isValidHexCode = hex => {
    if (hex.length === 7 && hex[0] === '#') {
        for (let i = 1; i < hex.length; i++) {
            if (!hexCodeCharacters.includes(hex[i])) {
                return false;
            }
        }
    } else {
        return false
    }
    return true
}

console.log(isValidHexCode('#1098ad'))   //true
console.log(isValidHexCode('1098ad'))    //false
console.log(isValidHexCode('#1098dz'))   //false
console.log(isValidHexCode('#CDCD5c'))   //true
console.log(isValidHexCode('#df2309a'))  //false
console.log(isValidHexCode('#AEACEE'))   //true
console.log(isValidHexCode('#aeacee'))   //true
console.log(isValidHexCode('#aEa&ee'))   //false
