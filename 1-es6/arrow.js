// old way
const printHi = function() {
  console.log('hi')
}

// using arrow functions
const printHi2 = () => { console.log('hi') }

  /*
setTimeout(function() { console.log('hi')}, 100)
setTimeout(() => { console.log('hi') }, 100)
*/

this.sound = 'this is the sound of the file'

const Dog = {
  sound: 'bark',
  talk: function() { console.log(this.sound) },
}
Dog.talk() // bark


const Cat = {
  sound: 'meow',
  talk: () => { console.log(this.sound) },
}
Cat.talk() // whatever this.sound is globally ('this is the sound of the file')

const echo = x => console.log(x)
