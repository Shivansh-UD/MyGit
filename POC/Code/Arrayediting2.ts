let names: string[]=["shivansh","ramesh","shyam","ram"];
let shorten=names.splice(1,2,"james","shiv");

console.log(shorten);//removes ramesh and shayam from list and reutrns them because they are removed
console.log(names);// resturn an list with "james", and "shivadded in the place of ramesh and shayam"