class Iphones{
    model:string;
    weight:number;
    color:string;

    constructor(m:string,w:number,c:string){
        this.model=m;
        this.weight=w;
        this.color=c;
    }
}

let i1=new Iphones("6s",10,"green");
let i2=new Iphones("7 plus",20,"red");
let i3=new Iphones("x", 15,"black");
let i4=new Iphones("14 Pro Max", 25, "Purple");
let i5=new Iphones("13 Pro",20,"purple");
let i6=new Iphones("14",22,"purple");

function lowergetter(iphone:Iphones[],heaviest:number,givencolor:string):string[]{
    let heavy: string[]=[];
    for(let i of iphone){
        if(i.weight>heaviest && i.color.toLocaleLowerCase()===givencolor){
            heavy.push(i.model);
        }
    }
    return heavy;

}
let newlist: Iphones[]=[i1,i2,i3,i4,i5,i6];

console.log(lowergetter(newlist,19,"purple"));

/**
 * was having some error in the code because of capitalization. it was returning 13 pro and 14 but not 14 pro max
 * because in the objects i made one of the colors capitalized and the rest were lower case 
 * used .toLowerCase method to fix this 
 * in the future run this with and without the method to understand the tru difference between them. 
 */

