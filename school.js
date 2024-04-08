let school={
    name:"secunda secondary school",
    established: "1998",
    location:"Mpumalanga",
    learners:100,
//create a function that fetches school properties and attribute
    displayinfo:function(){
        console.log(`The name of the school is ${school.name} ${"\n"}  located at
         ${school.location} ${"\n"} which was establised in ${school.established} which has ${school.learners} learners`);
    },//end of function displayinfo
hardData: function(){
    //object iterstion fuction
console.log("The name of the school is " +school.name +"\n"+
"located at"+ school.location)
},

notationData: function(){
console.log("the name of the school"+school[`name`])
}
}//end of Object
//access function
school.displayinfo()
school.hardData()
school.notationData()