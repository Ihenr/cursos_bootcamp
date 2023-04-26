import { suma, multiplicacion } from './controller.js'
import chalk from 'chalk';

const sum1 = suma(1, 2);
const sum2 = suma(4, 5);
console.log(sum1, sum2)

const mult = multiplicacion(sum1, sum2);
console.log(mult);

console.log(chalk.green("La multiplicación de las dos sumas es: ",mult));

