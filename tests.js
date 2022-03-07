// var beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
    //     function actuallyPrintingNames() {
        //     for (var index = 0; index < names.length; index++) {
            //         var name = names[index];
            //         console.log(name + ' was found at index ' + index);
            //     }
            //     console.log('name and index after loop is ' + name + ':' + index);
            //     }
            //     actuallyPrintingNames();
            // }
            // printNames(beatles);
            
            
            // const beatles = ['Paul', 'George', 'John', 'Ringo'];
            // function printNames(names) {
            //   function actuallyPrintingNames() {
            //     for (let index = 0; index < names.length; index++) {
            //       const name = names[index];
            
            //       console.log(name + ' was found at index ' + index);
            //     }
            //   }
            //   actuallyPrintingNames();
            // }
            // printNames(beatles);
            
            
// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";
// console.log(hello);
// var hello = 'world'; 
//console.log (hello); logs undefined
//hello ="world"


// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// 
//console.logs 'magnet'-confirmed

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
//super cool-confirmed


// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';

//log- chicken, log-half chicken  --Confirmed


// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
//log-undefined, undefined, undefined, fish, undefined--unconfirmed, mean is not a function error out


// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
//log-undefined, rewind error? log disco--unconfirmed, rewind was accessed logging rock r&b


// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
//log san jose, log seattle, log burbank san jose--confirmed


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//{Chicago, is hiring} {Berkeley closed for now}  confirmed

