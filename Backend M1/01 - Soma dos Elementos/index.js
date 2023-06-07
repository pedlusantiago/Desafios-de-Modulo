const input = [1, 2, 3, 4];
const resultado = input.reduce((acc, cur) => { // acc = accumulator && cur = currency
  return acc + cur
})
console.log(resultado);