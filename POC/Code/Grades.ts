class Final{
    grade:number;
    elective:boolean;

    constructor(g:number,e:boolean){
        this.grade=g;
        this.elective=e;

    }

}

let f1=new Final(50,false);
let f2=new Final(50,true);
let f3=new Final(95,false);
let f4=new Final(96,true);

function gradechecker(grades:Final[]): string[]{
    let message:string[]=[];
    for(const g of grades){
        if(g.grade>50&&g.elective===true){
            let text="you passed cuz!";
            message.push(text);
        }
        else{
            let text2="you failed bruh!";
            message.push(text2);
        }
        


    }
    return message

}

let array:Final[]=[f1,f2,f3,f4];
console.log(gradechecker(array));
