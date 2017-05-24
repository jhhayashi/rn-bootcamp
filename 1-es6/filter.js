// Array.prototype.filter()

[1,2,3,4,5].filter(() => true) // [1,2,3,4,5]
[1,2,3,4,5].filter(() => false) // []
[1,2,3,4,5].filter(() => Math.round(Math.random())) // []


[1,2,3,4,5].filter(x => x % 2 === 0) // []
