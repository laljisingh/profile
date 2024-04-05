class Car{
    constructor(name){
        this.name = name;
    }
    present(){
        console.log("all is gooosss");
    }
}

class SecondCar extends Car{
    constructor(sname){
        super(sname);
        this.sname = sname;
    }
    child(){
        console.log("i am child classs"+super.present());
    }
    hello = ()=>{
        console.log("i am aerrrow functionss");
    }
}


const ibj = new SecondCar("laljififf");

ibj.child();
ibj.hello();
