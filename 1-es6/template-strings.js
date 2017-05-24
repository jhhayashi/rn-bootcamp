const firstName = 'jordan'
const lastName = 'hayashi'

// old way
const s = 'hello, ' + firstName + ' ' + lastName + '!'

// with template strings
const s2 = `hello, ${firstName} ${lastName}!`

// old way with linebreaks
const newLine = 'dear friend,\n\nyou are a great friend\n\nsincerely,\njordan'

const newLine2 = `dear friend,

you are a great friend

sincerely,
jordan`


console.log(newLine2)
