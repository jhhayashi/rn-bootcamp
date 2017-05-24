// old way
function getJson() {
  return fetch('http://projects.jordanhayashi.com/echo')
    .then(res => res.json().catch(console.error))
    .then(console.log)
    .catch(err => doSomething(err))
}

// using async await
async function getJsonAsync() {
  try {
    const res = await fetch('http://projects.jordanhayashi.com/echo')
    try {
      const json = await res.json()
    } catch (err) {
      console.error(err)
    }
    console.log(json)
  } catch (err) {
    doSomething(err)
  }
}
