let people ={
    gender:'male'
}
let person=Object(people);

person.name='john';
person.age='22';
person.nationality='SA';
//NOW WE USE KEY (FROM THE ATTRIBUTES)to get all properties of the person

for(let key in person){
    console.log(key);
    console.log(person[key])
}