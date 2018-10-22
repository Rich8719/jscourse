// script that prints the lyrics to 99 bottles of beer, and handles plural cases( 100 bottles and 1 bottle)

/*-------works, but seems wrong------*/
// let bottles = 'bottles';
// let bottlesPlural = 'bottles';

// for (let num = 99; num > 0; num--) {
//     let takeOne = num - 1;
//     if (takeOne === 1){
//         bottlesPlural = 'bottle';
//     }
//     if (num === 1) {
//         bottles = 'bottle';
//     }
//     if (takeOne === 0){
//         bottlesPlural = 'bottles';
//     }
//     console.log(`${num} ${bottles} of beer on the wall, ${num} ${bottles} of beer. Take one down and pass it around, ${takeOne} ${bottlesPlural} of beer on the wall.`);
// }
// I'm using two variables which are basically the same and two numbers that are basically the same. Just add 's', or - 1.
//If I split the lyrics in to two statements, could use the same vaiables
let firstline, secondline;

for (let num = 99; num > 0; num--) {
    if (num !== 1){
        firstLine = `${num} bottles of beer on the wall, ${num} bottles of beer.`;
    } else {
        firstLine = `${num} bottle of beer on the wall, ${num} bottle of beer.`;
    }
    let takeOne = num - 1;
    if (takeOne !==1){
        secondLine = `Take one down and pass it around, ${takeOne} bottles of beer on the wall.`;
    } else {
        secondLine = `Take one down and pass it around, ${takeOne} bottle of beer on the wall.`;
    }   
    console.log(firstLine, secondLine);
}