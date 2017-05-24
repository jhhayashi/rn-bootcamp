const arr = [0, 1, 2, 3]

const sumThree = (x, y, z) => x + y + z

// old way
sumThree(arr[0], arr[1], arr[2])

// with spread
sumThree(...arr)

const arrWithFour = [...arr, 'four', 5]
const startFromNeg = [-1, ...arr, 4]
