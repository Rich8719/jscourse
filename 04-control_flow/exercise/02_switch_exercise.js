// Independent practice #2 - Switch statements

// let grade = 'C'

// if (grade === 'A') {
//   console.log('Awesome job')
// } else if (grade === 'B') {
//   console.log('Good job')
// } else if (grade === 'C') {
//   console.log('Okay job')
// } else if (grade === 'D') {
//   console.log('Not so good job')
// } else if (grade === 'F') {
//   console.log('Bad job')
// } else {
//   console.log('Unexpected grade value entered')
// }

// Use a switch statement to re-create the above if/else logic. Which solution is easier?
let grade = 'C';

switch (grade) {
  case 'A':
    console.log('Awesome job');
    break;
  case 'B':
    console.log('Good job');
    break;
  case 'C':
    console.log('Okay job');
    break;
  case 'D':
    console.log('Not so good job');
    break;
  case 'F':
    console.log('Bad job');
    break;
  default:
    console.log('Unexpected grade value entered');
}
//without the break statements it would return everything. 

//The fall through technique lets you group together cases and the output:

let grades ='D';

switch (grades) {
  case 'A':
  case 'B':
  case 'C':
    console.log('Great job');
    break;
  case 'D':
  case 'F':
    console.log('Bad job');
    break;
  default: 
    console.log('Unexpected grade input');
    break;
}