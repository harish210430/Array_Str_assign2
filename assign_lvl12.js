let persons = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' },
    { name: 'John', grade: 17, sex: 'M' },
    { name: 'Arya', grade: 14, sex: 'F' },
  ];
  
  // Create an array peopleName and store value of name key from persons array.
  let peopleName = [];
  persons.map(people => peopleName.push(people.name));
  console.log(peopleName);

  // Create an array peopleGrade and store the value of grade key from persons array.
  let peopleGrade = persons.map(people => people.grade);
  console.log(peopleGrade);

  // Create an array peopleSex and store the value of sex key from persons array.
  let peopleSex = persons.map(people => people.sex);
  console.log(peopleSex);

  // Log the filtered named of people in peopleName that starts with 'J' or 'P'.
  let filteredName = peopleName.filter((people) => 
        people.startsWith('J') ||
        people.startsWith('P') 
    );
  
console.log(filteredName);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'.
let filtered = peopleName.filter(people => people.startsWith('A') || people.startsWith('C')).length;
console.log(filtered);

// Log all the filtered male ('M') in persons array.
console.log(persons.filter(people => people.sex === 'M'));
// OR
// console.log(persons.filter(people => people.sex.includes('M')));

// Log all the filtered female ('F') in persons array.
let filteredFemale = persons.filter(people => people.sex.includes('F'));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array.
filteredFemale.filter(female => female.name.startsWith('C') || female.name.startsWith('J'));

// Log all the even numbers from peopleGrade array.
peopleGrade.filter(grade => grade%2 == 0);

// Find the first name that starts with 'J' in persons array and log the object.
persons.find(person => person.name.startsWith('J'));

// Find the first name that starts with 'P' in persons array and log the object.
persons.find(person => person.name.startsWith('P'));

// Find the first name that starts with 'J', grade is greater than 10 and is a female.
persons.find(person => person.name.startsWith('J') && person.grade > 10 && person.sex === 'F');

// Filter all the female from persons array and store in femalePersons array.
let femalePersons = persons.filter(person => person.sex === 'F');
console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array.
let malePersons = persons.filter(person => person.sex === 'M');

// Find the sum of all grades and store in gradeTotal.
let grandTotal = peopleGrade.reduce((acc, cv) => acc + cv, 0);
console.log(grandTotal);

// OR

persons.map(people => people.grade).reduce((acc, cv) => acc + cv, 0);

// Find the average grade.
let avgGrade = peopleGrade.reduce((acc, cv) => acc + cv, 0) / peopleGrade.length;
console.log(avgGrade);

// Find the average grade of male.
let avgMaleGrade = malePersons.map(m => m.grade).reduce((acc, cv) => acc + cv, 0) / malePersons.length;
console.log(avgMaleGrade);

// Find the average grade of female.
let avgFemaleGrade = femalePersons.map(f => f.grade).reduce((acc, cv) => acc + cv, 0) / femalePersons.length;
console.log(avgFemaleGrade);

// Find the highest grade.
[...peopleGrade].sort((a, b) => b-a)[0];

// Find the highest grade in male.
malePersons.map(m => m.grade).sort((a, b) => b-a)[0];

// Find the highest grade in female.
femalePersons.map(f => f.grade).sort((a, b) => b-a)[0];

// Find the highest grade for people whose name starts with 'J' or 'P'.
let highGrade = persons.filter(person => person.name.startsWith('J') || person.name.startsWith('P')).map(p => p.grade).sort((a, b) => b-a)[0];
console.log(highGrade);

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log(peopleGrade);
peopleGrade.sort((a, b) => a-b);
console.log(peopleGrade);

// Sort the peopleGrade in descending order.
console.log(peopleGrade.sort((a, b) => b-a));

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array.
console.log([...peopleGrade].sort((a, b) => b-a));

// Sort the array peopelName in ascending `ABCD..Za....z`.
console.log(peopleName.sort());

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array.
console.log([...persons].map(person => person.name).sort());