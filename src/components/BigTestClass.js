import TestClass from "./TestClass";

export class BigTestClass extends TestClass{
    constructor(value)
    {
        super(value);
    }
    printName=()=>{
        //super.printName();        
        console.log("In BigClass",this.getValue());        
    }
    
}
