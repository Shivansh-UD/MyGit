let size:number=12;


function inchestocm(x:number):number{
    return (x*2.54)/1;
}


let converted:number=inchestocm(size);

console.log(converted);