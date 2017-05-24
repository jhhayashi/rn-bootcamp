function returnOneIfTruthy(val) {
  if (val) return 1
  return 0
}

const returnOneIfTruthy2 = val => val ? 1 + 0 : 0
