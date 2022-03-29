//normal function

// function number(n){
//     return n;
// }

// console.log(number(10));


// const address = {
//     name:"firoz",
//     home: "Kushtia",
//     games: ['football','tennis','cricket'],
//     playes: function(){
//         console.log(this);
//         this.games.forEach(function(a){
//             console.log(`${this.name} loves play ${a}`);  // here this is not working properly cause of built in for each using
//             // this problem solution will be when using only fat arrow function 
//         })
//     }
// }

// address.playes();

//********** */
//fat arrow function *****

// const number =  () => 10; //when single line function
// console.log(number());

// const number = (a) => a; // when parameter used
// console.log(number(10));

// const number = (a,b) => a + b; // when double parameter used
// console.log(number(10,5));

// const number = (a,b) => { //when double or more line used in function using {}
//     const add = a + b;
//     const div = a / b;

//     return add + div;
// }
// console.log(number(10,5));


//********* */

//solution of this operator in fat arrow function

const gameLover = {
    name:'Firoz',
    game:['cricket','football','tennis'],
    playes : function(){
        this.game.forEach((a)=> console.log(`${this.name} loves play ${a}`));
    }
}

gameLover.playes();