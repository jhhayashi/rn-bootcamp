// old way
function a(name, height) {
  this.name = name
  this.height = height
}
const g = new a('giraffe')
console.log(g.name)


class Animal {
  constructor(name, height=5) {
    this.name = name
    this.height = height
  }
  
  speak() {
    console.log(`hello, my name is ${this.name} and i'm ${this.height} tall`)
    if (this.status) console.log(`i am ${this.status}`)

  }

  eat() {
    this.status = 'full'
  }
}

class Giraffe extends Animal {
  static greet() {
    console.log('hello, i am a giraffe class, but not a giraffe')
  }

  constructor(name, height=10) {
    super(name, height)
  }

  eat() {
    super.eat()
    console.log('i am eating')
  }
}

Giraffe.greet() // 'hello...'

const giraffe = new Giraffe('giraffe')
giraffe.eat()
giraffe.speak()
// giraffe.greet() // error



Array.prototype.map()
Array.isArray()

[1,2,3].map()

Array.isArray({}) // false
[1,2,3].isArray()
