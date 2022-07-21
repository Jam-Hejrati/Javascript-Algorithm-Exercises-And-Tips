'use strict'

/* The worst way of copy */
let a = [10, 20, 30]
let b = a

b[1] = 90

console.log('a) ', a)
console.log('b) ', b)

console.log('------------------------------------------')
/* Shallow copy ~~> just copy the first grade */

let first = [10, [11, 12], 20, 30]
let second = [...first]

second[0] = 90
second[1][0] = 22

console.log('first) ', first)
console.log('second) ', second)

console.log('------------------------------------------')
/* Deep copy ~~> will copy all grades */

let x = [10, [11, 12 , [99,999,9999]], 20, 30]
let y = JSON.parse(JSON.stringify(x))

y[0] = 90
y[1][0] = 1000
y[1][2][1] = 0

console.log('x) ', x)
console.log('y) ', y)
