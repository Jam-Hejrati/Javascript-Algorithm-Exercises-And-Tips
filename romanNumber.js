// https://leetcode.com/problems/roman-to-integer/
"use strict";

const romanToInteger = (str) => {
    let romanNums = str.split("");
    let intSum = 0;
    const romanObj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i < romanNums.length; i++) {
        intSum += romanObj[romanNums[i]];
    }
    return intSum;
};

console.log(romanToInteger("XII"));
