"use strict";

const romanToInteger = (str) => {
    let romanNums = str.split("");
    const testObj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i < romanNums.length; i++) {
        console.log(testObj[romanNums[i]]);
    }
};

romanToInteger("VI");
