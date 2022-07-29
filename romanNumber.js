// https://leetcode.com/problems/roman-to-integer/
"use strict";

const romanToInteger = (str) => {
    const romanObj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const romanNums = str.split("");
    let intSum = 0;
    for (let i = 0; i < romanNums.length; i++) {
        if (
            (romanNums[i] === "I" && romanNums[i + 1] === "V") ||
            (romanNums[i] === "I" && romanNums[i + 1] === "X") ||
            (romanNums[i] === "X" && romanNums[i + 1] === "L") ||
            (romanNums[i] === "X" && romanNums[i + 1] === "C") ||
            (romanNums[i] === "C" && romanNums[i + 1] === "D") ||
            (romanNums[i] === "C" && romanNums[i + 1] === "M")
        ) {
            let temp = romanObj[romanNums[i + 1]] - romanObj[romanNums[i]];
            intSum += temp;
            i++;
        } else {
            intSum += romanObj[romanNums[i]];
        }
    }
    return intSum;
};

console.log(romanToInteger("III")); // 1 + 1 + 1 ~~> 3
console.log(romanToInteger("LVIII")); // 50 + 5 + 3 ~~> 58
console.log(romanToInteger("MCMXCIV")); // 1000 + 900 + 90 + 4 ~~> 1994
