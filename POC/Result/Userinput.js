"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const ageStr = prompt("What is your age?");
const age = parseInt(ageStr);
console.log(`You are ${age} years old!`);
// always do this inorder to use user input and output features   
//npm install --save-dev @types/prompt-sync
//# sourceMappingURL=Userinput.js.map