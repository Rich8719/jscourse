// Independent practice #1

/*
Write a program that outputs results based on users’ age.
This exercise draws on if/else statements, Boolean logic, and comparison operators.
See the conditions below:

If you are under 16, you cannot do much outside of going to school
If you are 16 or older, you can drive
If you 18 or older, you can vote
If you are 21 or older, you can drink alcohol
If you are 25 or older, you can rent a car
If you are 35 or older, you can run for president
If you are 62 or older, you collect social security benefits

Have the program print out only the most recent thing that they've become eligible to do.
If they are 46, only print "You can run for president."
*/

let age = 35

if (age <= 16) {
    console.log('You can\'t do much except go to school');
} else if (age <= 18){
    console.log('You can vote');
} else if (age <= 21){
    console.log('You can drink');
} else if (age <= 25){
    console.log('You can rent a car');
} else if (age <= 35){
    console.log('You can run for president');
} else if(age <= 62){
    console.log('You can collect social security');
}
