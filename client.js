const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function bonusCalculator(employees){
  for (const employee of employees) {
  let totalCompensation = Number(employee.annualSalary);
  totalCompensation += ratingsBonus(employee);
  totalCompensation += longevityBonus(employee);
  if(employee.annualSalary > 65000){
    totalCompensation += employee.annualSalary * -.01
  }
  employee.totalCompensation = totalCompensation;
  if(employee.totalCompensation < employee.annualSalary){
    employee.totalCompensation = employee.annualSalary;
  }
  }
  return employees;
}

function ratingsBonus (employee){
  let bonus = 0;
    if (employee.reviewRating === 3) {
      bonus = Number(employee.annualSalary) * .04;
    } else if (employee.reviewRating === 4) {
      bonus = Number(employee.annualSalary) * .06;
    } else if (employee.reviewRating === 5) {
      bonus = Number(employee.annualSalary) * .10;
  }
  return bonus;
}

function longevityBonus(employee){
  return employee.employeeNumber.length === 4 ? employee.annualSalary * .05 : 0;
}

// rating bonus
// longevity bonus
// max salary bonus adjustment (over 65,000)
// bonus must be 0-13%
// function to cycle through each employee

console.log( employees );
console.log(ratingsBonus(employees[2]));
console.log(longevityBonus(employees[2]));
console.log(bonusCalculator(employees));