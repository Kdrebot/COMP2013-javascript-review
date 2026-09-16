/* 
Course: COMP2004
Author: Ziad Ewais
Title: COMP2004-Week1-JS-Review-Answers
Synopsis: Welcome to week 1 of COMP2004 - Full Stack Dev.
To start on the right foot we need to review the JavaScript
required to develop in React. 
*/

/*
*1
JavaScript Objects are a collection data structure where data are defined by "Key" and "Value"
Keys are a string followed by a colon (:)
Values can be any JavaScript data type (String, number, boolean, collection, ...)
*/
let data = [
  {
    id: 1,
    studentName: "John Doe",
    dateOfBirth: "2002-05-11",
    tuitionPaid: 12600,
    program: "General Arts and Science",
    highSchool: "West Andrews HS",
    courses: ["MATH8", "CHEM12", "COMP205", "COMM110", "GENE200"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {
      COMP101: 95,
      GENE101: 66,
      CHEM11: 85,
      COMM20: 45,
    },
  },
  {
    id: 22,
    studentName: "Shrey Gupta",
    dateOfBirth: "2003-11-23",
    tuitionPaid: 10200,
    program: "Welding",
    highSchool: "Toronto Heights HS",
    courses: ["MATH8", "WELD12", "WELD205", "CARP55", "GENE101"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {
      COMP101: 78,
      WELD101: 86,
      PHYS20: 55,
      COMM20: 0,
    },
  },
  {
    id: 3,
    studentName: "Veronica Martinez",
    dateOfBirth: "2002-10-04",
    tuitionPaid: 11300,
    program: "Computer Systems Technician",
    highSchool: "St. James HS",
    courses: ["COMP905", "COMP1100", "CARE10", "GENE66", "GENE12"],
    hasAttendedOrientation: false,
    previousCoursesGrades: {
      COMP101: 95,
      COMP1000: 88,
      GENE102: 68,
      COMM110: 75,
    },
  },
  {
    id: 4,
    studentName: "Jana Mohammed",
    dateOfBirth: "2003-02-16",
    tuitionPaid: 15900,
    program: "Automotive",
    highSchool: "INTERNATIONAL",
    courses: ["AUTO102", "AUTO102", "MATH8", "GENE101", "COMM110"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {},
  },
];

/* 
*2
To access data inside an object, we use the dot notation, or the square brackets notation
*/
let student0 = data[0];
console.log(student0);
let student0Name = student0.studentName; //access the object using the dot notation
console.log(student0Name);
console.log(`John Doe had a grade of ${student0.previousCoursesGrades.CHEM11}`);
let student0id = student0["id"]; //access the object using the square brackets notation
console.log(student0id);

let mysteryVar = "highSchool";
console.log(student0[mysteryVar]); //this method is handy when the key is a variable that changes within a loop
/*
*3
To add or change data in an object we call the key and assign a value to it
*/
student0.previousCoursesGrades.COMP101 = 100;
console.log(student0.previousCoursesGrades);
student0["id"] = 1001;
console.log(student0.id);
student0[mysteryVar] = "East Coast HS";
console.log(student0.highSchool);
/*
*4
Deconstruction of an object creating variables with same studentNames of keys with the assigned values 
 */
let { highSchool, id, studentName, tuitionPaid } = student0;
console.log(highSchool);
/*
 *5
Rest operator (...) is used to assign the rest of the data to a new object
 */

/**
 *6
 Spread operator (...) to spread keys of an object in a new object
 */
const newStudent = { ...student0 };
console.log(newStudent.id);
/**
 *7
 Template literals is creating strings with JS code embedded like variables or statements
 using back tick (`) operator
 */
console.log(
  `${student0.studentName} has paid ${student0.tuitionPaid} in tuition fees`,
);
/**
 *8
 * Arrow function is used to replace the old function declaration. Best used for one liner functions (lambda functions)
 */

//old function declaration method

function oldFunction() {
  return "This is the original way of writing a function in JS";
}

//arrow function declaration method

const arrowFunction = (name) => {
  return `This is the way of writing an arrow function in JS that belongs to ${name}`;
};

console.log(arrowFunction("John Doe"));

//Lambda function declaration method
//you do not add braces or return statements
//it must be a one liner function
const lambdaFunction = (num1, num2) => num1 + num2;
console.log(lambdaFunction(7, 9));

/**
 *8
 Ternaries are short, one liners, if/else statements 
 */

//normal if statement:
if (student0.studentName === "Johnny Doe") {
  console.log("Hello Johnny Doe");
} else if (student0.studentName === "John Doe") {
  console.log("Hello John Doe");
} else {
  console.log("Hello Stranger");
}

console.log(
  student0.studentName === "Johnny Doe" ? "Hello Johnny Doe" : "Hello Stranger",
);

/**
 *9
 Short circuting with &&, ||, ?? operators
 NOTE: Falsy values are (false, 0 (the number zero), empty string, undefined, NaN, null)
 */

//and operator work that both values need to be true

//or operator work that one of the values need to be true

//using or operator with a zero value cause issues beacuse zero number is a falsy value

//to solve this issue we use the Nullish coalescing operator

/**
 *10
 Array map: To change all the values of an array at once using a statement
 stored in a new collection (array or object)
 */

const numArray = [10, 12, 6, 55, 39];
const newMappedArray = numArray.map((num) => num * 2);
console.log(newMappedArray);

//to get all students names in a new array

const studentNames = data.map((student) => student.studentName); //new way of mapping using =>
console.log(studentNames);

const studentTuition = data.map(function (student) {
  return student.tuitionPaid;
}); // old way of doing things
console.log(studentTuition);

/**
 *11
 Array filter: to filter certian data in regarded to a statement stored in a new collection
 */

const numsAbove15 = numArray.filter((num) => num > 15);
console.log(numsAbove15);

//Filter all students born in 2002 using filter and includes method

const students2002 = data.filter((student) =>
  student.dateOfBirth.includes("2002"),
);
console.log(students2002);

/**
 *12
 Array reduce: To reduce an array to a single value 
 Ex: display the total of all students tuition paid
 */

const sumNumbers = numArray.reduce(
  (accumulator = 0, item) => accumulator + item,
);
console.log(sumNumbers);

//the reduce method takes two parameters, the first is a callback function and the second is the initial value.

const sumTuition = data.reduce((acc = 0, student) => acc + student.tuitionPaid);
console.log(sumTuition);

const funnyNums = ["1", "2", "3", "4"];
console.log(funnyNums.reduce((acc = 0, num) => acc + num));

/**
 *13
 Array sort: to sort arrays ascendingly or descendingly.
 NOTE: This method changes the orginal array. If you want to avoid this, use .slice() method before sorting 
 
 */

//HAS TO BE AN ITEM NUMBER TO WORK*************

const acendingNums = numArray.sort((a, b) => a - b);
console.log(acendingNums);

const decendingNums = numArray.sort((a, b) => b - a);
console.log(decendingNums);

//sort students by paid tuition

const acendingTuition = data.slice().sort(
  //slice will copy to a new array
  (studentA, studentB) => studentA.tuitionPaid - studentB.tuitionPaid,
);
console.log(acendingTuition);

/**
 *14
 Working with immutable arrays
 */

//adding a new student object to the data array using spread (...) operator

const newerStudent = {
  id: 5,
  studentName: "Jane James",
  dateOfBirth: "2003-03-18",
  tuitionPaid: 13600,
  program: "Compter Programming",
  highSchool: "Ottawa High HS",
  courses: ["COMP1011", "COMP1012", "COMP1013", "GENE101", "GENE102"],
  hasAttendedOrientation: false,
  previousCoursesGrades: {
    COMP201: 87,
    COMP205: 78,
    GENE20: 56,
    COMM110: 77,
  },
};

const newData = [...data, newerStudent];
console.log(newData);

//Remove a student object using filter method

const removeStudent = newData.filter((student) => student.id !== 1001);
console.log(removeStudent);

//Update a student object using the map method
const updateData = newData.map((student) =>
  student.id === 3 ? { ...student, hasAttendedOrientation: true } : student,
);
console.log(updateData);
