'use strict'

/* A simple programme to change under_score strings into camelCase strings */
/* exp: test_string ~~> testString */

const swapString = str => {
    const splitedStr = str.split('_')
    const camelArr = []
    for(let i=1 ; i!==splitedStr.length ; i++){
        camelArr.push(
            splitedStr[i].replace(splitedStr[i][0] ,splitedStr[i][0].toUpperCase() )
        )
    }
    camelArr.unshift(splitedStr[0])
    return camelArr.join('')
}

console.log(swapString('jam_hejrati'))
console.log(swapString('this_is_a_test_string'))