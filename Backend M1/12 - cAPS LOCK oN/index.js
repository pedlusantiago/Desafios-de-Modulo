const input = "cAPS"
let resposta;
if (input[0] === input[0].toLowerCase() && input.slice(1) === input.slice(1).toUpperCase()) {
    resposta = input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase()
} else if (input === input.toUpperCase()) {
    resposta = input.toLowerCase()
} else {
    resposta = input
}
console.log(resposta)