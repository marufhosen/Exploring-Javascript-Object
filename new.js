class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const phillDetails = new Person('Phill', 'Foden', 25000);  // Qhen we make a object from a class, we used 'new' keyword
const alisonDetails = new Person('Allison', 'Backer', 27000);
console.log(phillDetails);
console.log(alisonDetails);