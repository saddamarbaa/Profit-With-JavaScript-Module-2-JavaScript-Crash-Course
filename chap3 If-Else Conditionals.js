// JavaScript Conditional Statements (Control Flows)

// The if Statement

// Syntax
/*
if (condition) {
  //  block of code to be executed if the condition is true
}
*/

let now = new Date();
let dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6
if (dayOfWeek === 5) {
    /* This statement will only execute if the
     * above condition (dayOfWeek === 5) returns true
     */
    console.log("Have a nice weekend!");
}

const name = "Sadam";
if (name === "Sadam") {
    /* This statement will only execute if the
     * above condition (name === "Sadam") returns true
     */
    console.log("hi " + name);
}

// The else Statement

// Syntax
/*
if (condition) {
  //  block of code to be executed if the condition is true
} 
else {
  //  block of code to be executed if the condition is false
}
*/

if (name === "Sadam") {
    /* This statement will only execute if the
     * above condition (name === "Sadam") returns true
     */
    console.log("hi " + name + " You are most welcome");
} else {
    /* This statement will only execute if the
     * condition specified in the "if" returns false.
     */
    console.log("Sorry " + name + " You are not welcome here please go back");
}

let age = 23;
if (age >= 18) {
    /* This statement will only execute if the
     * above condition (age>=18) returns true
     */
    console.log("You are eligible for voting");
} else {
    /* This statement will only execute if the
     * condition specified in the "if" returns false.
     */
    console.log("You are not eligible for voting");
}

// Nested If..else statement

// Syntax of Nested if else statement:
/*
if(condition) {
    // Nested if else inside the body of "if"
    if(condition2) {
       //Statements inside the body of nested "if"
    }
    else {
       // Statements inside the body of nested "else"
    }
}
else {
    // Statements inside the body of "else"
}
*/

Number1 = 10;
Number2 = 12;
if (Number1 != Number2) {
    console.log(Number1 + " is not equal to " + Number2);
    // Nested if else
    // Will only be executed if statement above (Number1 != Number2) it is true 
    if (Number1 > Number2) {
        console.log(Number1 + " is greater than " + Number2);
    } else {
        console.log(Number1 + " is less than " + Number2);
    }
} else {
    console.log(Number1 + " is equal to " + Number2);
}

// The else if Statement

// Syntax of else..if statement:
/*
if (condition1) 
{
   // These statements would execute if the condition1 is true
}
else if(condition2) 
{
   // These statements would execute if the condition2 is true
}
else if (condition3) 
{
   // These statements would execute if the condition3 is true
}
.
.
else 
{
   // These statements would execute if all the conditions return false.
}
*/

// update value of variable number1 and number2
Number1 = 23;
Number2 = 123;
if (Number1 === Number2) {
    console.log(Number1 + " is equal to " + Number2);
} else if (Number1 > Number2) {
    console.log(Number1 + " is greater than " + Number2);
} else {
    console.log(Number2 + " is greater than " + Number1);
}

// student grade example
// printing the students' grades based on their marks
let marks = 87;
/*
Marks Grade

90 — — -100 A+

80 — — -89 A

70 — — -79 B

60 — — -69 C

50 — — -59 D

00 — — -49 F
*/
marks = 89;
if (marks < 0) { // Handle corner cases
    console.log("grade should be positive number");
} else if (marks > 100) {
    console.log("grade should be number between zero to 100")
} else if (marks >= 90 && marks <= 100) {
    console.log("Your Grade is A+ ");
} else if (marks >= 80 && marks < 90) {
    console.log("Your Grade is A ");
}
/*
else if (grade >= 0 && grade <= 40) {
    console.log("You got F grade with that been said You Failed in this exam")
} else if (grade > 40 && grade <= 50) {
    console.log("You got D grade")
} else if (grade > 50 && grade <= 60) {
    console.log("You got C grade")
} else if (grade > 60 && grade <= 75) {
    console.log("You got B grade")
} else {
    // in else cases the grade is between 75 and 100
    console.log("You got A grade very Well done");
}
*/