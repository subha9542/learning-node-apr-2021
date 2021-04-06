const argument1 = parseInt(process.argv[2], 10)
const operator = process.argv[3]
const argument2 = parseInt(process.argv[4], 10)

console.log(operator);

switch (operator) {
    case "+":
        console.log(argument1 + argument2)
        break;

    case "-":
        console.log(argument1 - argument2)
        break;

    case "x":
        console.log(argument1 * argument2)
        break;

    case "/":
        console.log(argument1 / argument2)
        break;

    default:
        break;
}

// node calculator.js 11454 + 2454
// node calculator.js 11454 - 2454
// node calculator.js 11454 * 2454
// node calculator.js 11454 / 2454

// node login.js admin praveen 123456 
// node login.js normal praveen 123456