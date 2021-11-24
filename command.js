// const x = 'x';
// const y = 'y';
// console.log(x, y);

// console.log('My %s has %d years', 'cat', 2);

// console.log('/%o', Number);

// const oranges = ['orange', 'orange']
// const apples = ['just one apple']
// oranges.forEach(fruit => {
//   console.count(fruit)
// })
// apples.forEach(fruit => {
//   console.count(fruit)
// })

// console.countReset('orange')

// oranges.forEach(fruit => {
//   console.count(fruit)
// })

// const doSomething = () => console.log('test')
// const measureDoingSomething = () => {
//   console.time('doSomething()')
//   //do something, and measure the time it takes
//   doSomething()
//   console.timeEnd('doSomething()')
// }
// measureDoingSomething()
// console.log('\x1b[33m%s\x1b[0m', 'hi!')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  })
  