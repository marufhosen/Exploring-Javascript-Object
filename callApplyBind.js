const marufDetails = {
    firstName: 'Maruf',
    lastName: 'Hossen', 
    salary: 25000,
    salaryExtend: function(amount){
        this.salary = this.salary + amount;
    }
}

const rakibDetails = {
    firstName: 'Fazleh',
    lastName: 'Rakib',
    salary: 35000
}

marufDetails.salaryExtend(7000);
console.log(marufDetails.salary);

 //       Call a function/method from another object to a object  using 'BIND'

// const rakibSalaryExtend = marufDetails.salaryExtend.bind(rakibDetails);
// rakibSalaryExtend(6000);
// console.log(rakibDetails.salary);

//        Call a function/method from another object to a object  using 'CALL'

// marufDetails.salaryExtend.call(rakibDetails, 9000); //[1st perameter = apply which object, others perameter as much as i need]
// console.log(rakibDetails.salary);

//        Call a function/method from another object to a object  using 'APPLY'
marufDetails.salaryExtend.apply(rakibDetails, [18000]);  // [1st perameter = apply which object, others perameter as much as i need as a array]
console.log(rakibDetails.salary);