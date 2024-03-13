import promptsync from 'prompt-sync';

const prompt = promptsync();

const ageStr: string = prompt("What is your age?");
const age: number = parseInt(ageStr);

console.log(`You are ${age} years old!`);
// always do this inorder to use user input and output features   
//npm install --save-dev @types/prompt-sync