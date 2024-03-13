class Paint{
    name:string;
    year:number;
    artistName:string;

    constructor(n:string,y:number,an:string){
        this.name=n;
        this.year=y;
        this.artistName=an;
    }

}

let p1=new Paint("dog",1909,"jamal");
let p2=new Paint("Shelby GT 500",2017,"Shivansh");
let p3=new Paint("BMW",2024,"Shivansh");
let p4=new Paint("Lamborghini",2023,"Shivansh");

function identifier(paints:Paint[],name1:string):string[]{
    let matched:string[]=[]
    for(let p of paints){
        if(p.year>=2015&&p.artistName===name1){
            matched.push(p.name)
        }
    }
    return matched;
}

let arry:Paint[]=[p1,p2,p3,p4];

console.log(identifier(arry,"Shivansh"));