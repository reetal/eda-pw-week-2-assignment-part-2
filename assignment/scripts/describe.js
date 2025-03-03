// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We created a variable called name and set it to the value 'Dane' as a string. 
// then we check if the name is Mary. If it is Mary then
// we console.log 'Hi Mary!'.
// Otherwise, we console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable called secret.
// We also declare a variable named code and set it to a number value of 123.
// We then check if the code strictly equals to 123. So if code is strictly equal to 123,
// then we assign a string value 'super' to the variable named secret and code * 2 to var code to be excuted as such.
// We check if the code is greater than 250. If it is true then set the secret value to duper,
// otherwise, we console.log 'secret'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a variable called isStudent and set it a boolean value true. 
// We create a variable named age and set it 34.
// We create a variable called zip and set it to 55407.
// Then we evaluate them with a conditional statment as follow:
// If isStudent equals to true and the zip greater than 8000 then we console.log `You're a student on the West Coast!`.
// Otherwise if isStudent is false or age less than 30, we console.log 'What are your hobbies?'.
// And otherwise if the isStudent is true then we console.log 'Welcome to Prime!'.
// Otherwise,we console.log 'How about the weather? .


//CODE

/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX- colorOne -- per instruction colorOne and should be assigned a 'blue'. So it should be 
let colorOne = 'blue';
// Fix - colorTwo - the value of it was blue, However, it should be red as follow:
let colorTwo = 'red';

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';

// FIX - colorTwo-- set to purple, it was missed in the code. so
//colorTwo = 'purple'; should be added
}

*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// FIX --logical operator--||, the instruction asks for a logical AND operator 
// so it should be (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// FIX - minAge <= age-- though this works, it could have been written as age >= minAge to match the instruction given above.
if(minAge <= age) {
// FIX- per instruction we don't need console.log('no entry'); instead it could be console.log('enter'); by ommiting the else part.
  console.log('no entry');
} else {
  console.log('enter');
}
*/

