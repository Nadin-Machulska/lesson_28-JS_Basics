"use strickt"
//user`s name
let usersName = prompt("Hi! What's your name? ");
alert ("Hi, " + usersName);

//user`s age

let birthYear = prompt("What is your birth year, " + usersName + "?");
const currentYear = (2022);
const age = currentYear - birthYear;
alert("You are " + age + "y.o.");

//perimeter of a square
let squareSide = prompt(usersName + "," + "write down any value of the side of the square");
const perimeterOfTheSquare = squareSide**2;
alert("The perimeter is" + perimeterOfTheSquare);

//area of the circle
let radiusOfCircle = prompt(usersName + "," + "write down any value of the radius of the circle");
const numberP = (3,14);
const areaOfTheCircle = radiusOfCircle**2*numberP
alert("The area is" + areaOfTheCircle);

//speed
let distance = prompt(usersName +"," + "what is the distance between your and neighbour cities?");
let timeToGo = prompt(usersName + "," + "what time iin hours do you need to get in time?" );
const speed = distance / timeToGo;
alert("Your speed must be" + speed);

//currency converter
let dollarMoney = prompt("Enter the amount to be transferred in euros");
const converterInEuro = dollarMoney * 1.275;
alert(converterInEuro + "euros");

//Змінні
let Ivanov_ivan
let vladislav99vong
let $stanislavaStanislavova
let _petrichenkoPetro

// однорядковий коментарій

/* багаторядковий
 * коментарій
 */