
//                                 Question 01 

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName + " " + lastName;
// alert("Hey " + fullName + "!");

//                                  Question 02  

// let userPhone = prompt("Enter your favorite mobile phone model:", "Samsung Galaxy S6 Edge Plus");
// let lengthInput = userPhone.length;
// document.write("My Favorite Phone is: " + userPhone + "<br>");
// document.write("Length of string: " + lengthInput);

//                                  Question 03 

// let stringPak = "Pakistan";
// let findN = stringPak.indexOf("n");
// document.write("String: " + stringPak + "<br>");
// document.write("Index of 'n': " + findN);

//                                  Question 04 

// let stringHello = "Hello World";
// let findL = stringHello.lastIndexOf("l");
// document.write("String: " + stringHello + "<br>");
// document.write("Last index of 'l': " + findL);

//                                  Question 05  

// let stringOfPak = "Pakistani";
// let charAtThree = stringOfPak[3];
// document.write("String: " + stringOfPak + "<br>");
// document.write("Character at index 3: " + charAtThree);

//                                  Question 06 

// let firstNameAgain = prompt("Enter your first name:");
// let lastNameAgain = prompt("Enter your last name:");
// let fullNameAgain = firstNameAgain.concat(" " + lastNameAgain);
// alert("Hey " + fullNameAgain);

//                                  Question 07 

// let cityHyder = "Hyderabad";
// let cityIslam = cityHyder.replace("Hyder", "Islam");
// document.write("City: " + cityHyder + "<br>");
// document.write("After replacement: " + cityIslam);

//                                  Question 08 

// var message = "Ali and Sami are best friends. They play cricket and football together";
// let replacementAnd = message.replace(/and/g, "&");
// document.write(message + "<br>");
// document.write(replacementAnd);

//                                  Question 09 

// let value = "472";
// let convertValue = parseInt(value);
// document.write("Value: " + value + "<br>");
// document.write("Type: " + typeof(value) + "<br> <br>");
// document.write("Value: " + convertValue + "<br>");
// document.write("Type: " + typeof(convertValue));

//                                  Question 10 

// let userInput = prompt("Enter your favorrite food in lowercase:");
// let conversionOfInput = userInput.toUpperCase();
// document.write("User Input: " + userInput + "<br>");
// document.write("Upper case: " + conversionOfInput);

//                                  Question 11

// let inputJs = "javascript";
// let capitalJ = inputJs[0].toUpperCase();
// let smallOthers = inputJs.slice(1).toLowerCase();
// let capitalJs = capitalJ + smallOthers;
// document.write("User Input: " + inputJs + "<br>");
// document.write("Title Case: " + capitalJs);

//                                 Question 12 

// var num = 35.36;
// let stringedNum = num.toString();
// let newNum = stringedNum.replace(".", "");
// document.write(typeof(num) + ": " + num + "<br>");
// document.write(typeof(newNum) + ": " + newNum);

//                                 Question 13 

// let userName = prompt("Enter your username:");
// // ascii_of_at = 64;
// // ascii_of_exclamation = 33;
// // ascii_of_comma = 44;
// // ascii_of_period = 46;
// // ascii_of_bracket_start = 91;
// // ascii_of_bracket_end = 93;
// var characterCode = userName.charCodeAt(0)
// for (let i = 0; i < userName.length; i++) {
//     characterCode = userName.charCodeAt(i);
//     if (characterCode === 64 || characterCode === 33 || characterCode === 44 || characterCode === 46 || characterCode === 91 || characterCode === 93) {
//         alert("Please enter a valid username!")
//         break;
//     }
// }

//                                   Question 14 

// let myArray = ["cake", "apple pie", "cookie", "chips", "patties"];
// let flag = "<b>not available</b>";
// let askUser = prompt("What do you want to order sir/ma'am?");
// askUser.toLowerCase();

// for (var i = 0; i < myArray.length; i++) {
//     if (askUser === myArray[i]) {
//         flag = "<b>available</b>";
//     }
// };
// if (flag === "<b>available</b>") {
//     document.write(askUser + " is " + flag + " at index " + myArray.indexOf(askUser) + " in our bakery.");
// }
// else {
//     document.write("We are sorry. " + askUser + " is <b>not available</b> in our bakery.");
// }

//                                    Question 15 
// let ascii_of_0 = 49;
// let ascii_of_a = 97;
// let ascii_of_A = 65;
// let flagPass = false;
// let password = prompt("Enter your password:");

// if (password.length < 6) {
//     flagPass = true;
//     // alert("Error")
// }
// let countNum = 0;
// for (i = 0; i < password.length; i++) {
//     let passNum = password.charCodeAt(i)

//     for (j = ascii_of_0; j < 58; j++) {
//         if (passNum === j) {
//             countNum += 1;
//         }
//     }
// }
// let countNum_1 = 0;
// for (i = 0; i < password.length; i++) {
//     let passNum = password.charCodeAt(i)
//     for (j = ascii_of_a; j < 123; j++) {
//         if (passNum === j) {
//             countNum_1 += 1;
//         }
//     }
// }
// let countNum_2 = 0;

// for (i = 0; i < password.length; i++) {
//     let passNum = password.charCodeAt(i)

//     for (j = ascii_of_A; j < 91; j++) {
//         if (passNum === j) {
//             countNum_2 += 1;
//         }
//     }
// }
// // Checking if first character is a number 
// let countNum_3 = 0;
// let passNum = password.charCodeAt(0);
// for (i = ascii_of_0; i < 58; i++) {
//     if (passNum === i) {
//         countNum_3 += 1;
//     }
// }
// if (flagPass === true && countNum === 0) {
//     prompt("Your password must contain atleast 6 characters\n Your password must contain a number");
// }
// else if (flagPass === true && countNum_1 === 0) {
//     prompt("Your password must contain atleast 6 characters\n Your password must contain a small alphabet");
// }
// // else if (flagPass === true && countNum_2 === 0) {
// //     prompt("Your password must contain atleast 6 characters\n Your password must contain a capital alphabet");
// // }
// else if (flagPass === true && countNum_3 >= 1) {
//     prompt("Your password must contain atleast 6 characters\n Your password must not start with a number!");
// }
// else if (countNum === 0 && countNum_1 === 0) {
//     prompt("Your password must contain a number\n Your password must contain a small alphabet");
// }
// else if (countNum === 0 && countNum_3 >= 1) {
//     prompt("Your password must contain a number\n Your password must not start with a number!");
// }
// else if (countNum_1 === 0 && countNum_3 >= 1) {
//     prompt(" Your password must contain a small alphabet\n Your password must not start with a number!");
// }
// else if (flagPass === true) {
//     prompt("Your password must contain atleast 6 characters")
// }
// else if (countNum === 0) {
//     prompt("Your password must contain a number")
// }
// else if (countNum_1 === 0) {
//     prompt("Your password must contain a small alphabet")
// }
// else if (countNum_3 >= 1) {
//     prompt("Your password must not start with a number!")
// }


//                                 Question 16

// var university = "University of Karachi";
// let stringedArray;
// for (let i = 0; i < university.length; i++) {
//     stringedArray = university[i].split(" ");
//     stringedArray = stringedArray.toString();
//     if (stringedArray === ",") {
//         stringedArray = " ";
//     }
//     document.write(stringedArray + "<br>");
// }

//                                Question 17 

// var userPrompt = prompt("Enter some word or sentence:");
// var lastChar = userPrompt.charAt(userPrompt.length - 1);
// document.write("User Input: " + userPrompt + "<br>");
// document.write("Last Character of Input: " + lastChar);

//                                Question 18 

// let Strings = "The quick brown fox jumps over the lazy dog.";
// let String = Strings.toLowerCase();
// let findThe = String.split("the").length - 1;
// document.write("Text: " + Strings + "<br>");
// document.write("There are " + findThe + " occurence(s) of the word 'the'");
