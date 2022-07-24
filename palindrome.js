// https://leetcode.com/problems/palindrome-number/
'use strict'

const palindrome = function (num) {
    let str = String(num)
    let revStr = str.split('').reverse().join('')
    return str === revStr
}

console.log(palindrome(121))  //true  ~~> 121 == 121
console.log(palindrome(-121)) //false ~~> -121 != 121-
console.log(palindrome(10))   //false ~~> 10 != 01
