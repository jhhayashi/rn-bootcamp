// const cannot be reassigned
const arr = [0, 1, 2]

// arr = 'asdf' // error!

const obj = {name: 'jordan'}
// this works!
obj.lastName = 'hayashi'


let arr2 = ['asdf']
arr2 = 'asdf'
arr2 = 4


if (true) {
  var x;
  let x2;
}

// console.log(x2) // error!

