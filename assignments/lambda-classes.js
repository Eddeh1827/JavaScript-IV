// CODE here for your Lambda Classes
// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// - We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// - Lambda personnel can be broken down into three different types of `people`.
//   - **Instructors** - extensions of Person
//   - **Students** - extensions of Person
//   - **Project Managers** - extensions of Instructors
// - **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:
class Person {
  constructor({ name, location, age, favLanguage, specialty, catchPhrase }) {
    this.name = name;
    this.location = location;
    this.age = age;
  }
  speak() {
    return `My name is ${this.name}, I am from ${this.location}`;
  }
}
// ```js
// const fred = new Instructor({
//   name: "Fred",
//   location: "Bedrock",
//   age: 37,
//   favLanguage: "JavaScript",
//   specialty: "Front-end",
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

//x// - First we need a Person class. This will be our `base-class`
//x// - Person receives `name` `age` `location` all as props
//x// - Person receives `speak` as a method.
//x// - This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
// #### Instructor

// - Now that we have a Person as our base class, we'll build our Instructor class.
// - Instructor uses the same attributes that have been set up by Person
// - Instructor has the following unique props:
//   - `specialty` what the Instructor is good at i.e. 'redux'
//   - `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   - `catchPhrase` i.e. `Don't forget the homies`
// - Instructor has the following methods:
//   - `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   - `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
class Instructor extends Person {
  constructor({ name, age, location, specialty, favLanguage, catchPhrase }) {
    super({ name, age, location });
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}.`;
  }
}

// #### Student
// - Now we need some students!
// - Student uses the same attributes that have been set up by Person
// - Student has the following unique props:
//   - `previousBackground` i.e. what the Student used to do before Lambda School
//   - `className` i.e. CS132
//   - `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// - Student has the following methods:
//   - `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   - `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   - `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
class Student extends Person {
  constructor({
    name,
    location,
    age,
    favLanguage,
    specialty,
    catchPhrase,
    previousBackground,
    className,
    favSubjects
  }) {
    super({ name, location, age, favLanguage, specialty, catchPhrase });
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
  }
  listSubjects() {
    return `${this.favSubjects.forEach(el => console.log("element", el))}`;
  }
  PRAssignment(subject) {
    return `${this.name} submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

// #### Project Manager

// - Now that we have instructors and students, we'd be nowhere without our PM's
// - ProjectManagers are extensions of Instructors
// - ProjectManagers have the following unique props:
//   - `gradClassName`: i.e. CS1
//   - `favInstructor`: i.e. Sean
// - ProjectManagers have the following Methods:
//   - `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   - `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
class ProjectManagers extends Instructor {
  constructor({
    name,
    age,
    location,
    specialty,
    favLanguage,
    catchPhrase,
    gradClassName,
    favInstructor
  }) {
    super({ name, age, location, specialty, favLanguage, catchPhrase });
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel} @channel standby times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student}'s code on ${subject}`;
  }
}

////////////////////////Instructors///////////////////////
const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});
const dan = new Instructor({
  name: "Dan",
  location: "Somewhere Downtown",
  age: 40,
  favLanguage: "CatScript",
  specialty: "KittyLitter",
  catchPhrase: `Don't forget TacoCat!`
});
/////////////////////Students//////////////////////////
const eddie = new Student({
  name: "Eddie",
  location: "Los Angeles",
  age: 32,
  favLanguage: "JavaScript",
  specialty: "Front-End",
  catchPhrase: "It's not what you know. It's what you can prove",
  previousBackground: "Security",
  className: "WEB20",
  favSubjects: ["Chess", "JavaScript", "Communications", "Science"]
});
const chuck = new Student({
  name: "Charles",
  location: "Houston",
  age: 44,
  favLanguage: "Basketball",
  specialty: "The Paint",
  catchPhrase: "The proof is in the pudding",
  previousBackground: "Basketball Player",
  className: "WEB44",
  favSubjects: ["Dribbling", "Shooting", "Rebounding"]
});
////////////////Project Managers////////////////////////////
const isaac = new ProjectManagers({
  name: "Isaac",
  location: "California",
  age: 23,
  specialty: "Front-End",
  favLanguage: "JavaScript",
  catchPhrase: "Muahahahaha!",
  gradClassName: "WEB16",
  favInstructor: "Joe"
});
const will = new ProjectManagers({
  name: "Will",
  location: "Bel Air",
  age: 50,
  specialty: "Music",
  favLanguage: "Love",
  catchPhrase: "Na Na Na Na Na Na Get Jiggy Wit It!",
  gradClassName: "WEB10",
  favInstructor: "Bobby"
});
console.log(isaac.standUp("@WEB20_isaac"));
console.log(isaac.debugsCode("Eddie", "JavaScript"));
console.log(eddie.speak());
console.log(eddie.favSubjects);
console.log(eddie.sprintChallenge("JavaScript"));
console.log(chuck.PRAssignment("JS Sprint"));
console.log(fred.demo("Math"));
console.log(fred.specialty);
console.log(dan.grade("Eddie", "JavaScript"));
console.log(dan.catchPhrase);
console.log(will.gradClassName);
