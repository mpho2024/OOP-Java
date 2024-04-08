const Person={
    //data properties
    //key       value
    firstName:'Alice',
//accessor property (getter)
    get getName(){
        return this.firstName;
    },

    set changeName (newName){//a parameter for re assigning or mapping a new values
     this.firstName=newName;
    }

}
console.log(Person)//this is an object
console.log(Person.firstName)//this is called accessing a data property
console.log(Person.getName)//this is called accessing using getter method
//
Person.newName="Alison";

console.log(Person.firstName)
