// use readline as scanner to take in input.



import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What\'s your name? ', (name: string) => {
    console.log(`Hey, ${name.slice(0, 4)}!`);
    rl.close();
});
// run npm install @types/node in terminal to use modules for input and output.