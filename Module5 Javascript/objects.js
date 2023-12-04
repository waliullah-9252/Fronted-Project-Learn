
var person = {
    name: "Waliullah",
    age : 24,
    gender: "Male",
    occupation: "Student",
    homeDistict: "Satkhira",
    collage:{
        collageName: "Satkhira Govt Collage",
        teachersList: 50,
        studentsList: 1000
    }
}

// console.log(person.collage.collageName);
// console.log(person.collage.teachersList);
// console.log(person.collage.studentsList);
console.log(Object.entries(person.collage));



// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);
// console.log(person.occupation);
// console.log(person.homeDistict);

// console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));