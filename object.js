// const person = {
//     firstName :'Abhishek',
//     lastName : 'Lad',
//     age : 50,
//     fullName:function() {
//         return this.firstName + " " + this.lastName;

//     }
// };

// console.log(person.fullName())

const person = {
    firstName :'Abhishek',
    lastName : 'Lad',
    age : 50,
    get fullName() {
        return this.firstName + " " + this.lastName;

    }
};

console.log(person.fullName);
