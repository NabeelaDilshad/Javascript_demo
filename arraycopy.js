// there are two types of copies in array javasript
//+++++++++++++++++++Shallow copies++++++++++

//Imagine you have a bag with smaller bags inside.Each smaller bag contains different things. 
// - Making a shallow copy is like making a new bag and putting the same smaller bags inside it, 
// without taking out their contents.So, if you add something new to one of the smaller bags in the new bag,
//  it will also show up in the original bag because they share the same smaller bags.

//example......

//Original box with nested smaller boxes
const originalBox = [1, [2, 3]];
//shallow copy using slice method
const Shallowcopybox = originalBox.slice();

//modifying shallow copy..
Shallowcopybox[1].push(4);

console.log(originalBox);
console.log(Shallowcopybox);



//++++++++++++++++++++++ Deep copies +++++++++++//

// - Making a deep copy is like making a new bag and filling it with 
// exact copies of all the smaller bags and their contents.
// So, if you change something in one of the smaller bags in the new bag,
//  it won't affect the original bag because they are completely separate

//example....2.
//Original array
const Originalarray = [1, 2, [3, 4]];

//deep copy using JSON methods
const deepCopyArray = JSON.parse(JSON.stringify(Originalarray));

//MODify deep array
deepCopyArray[2][0] = 999;
console.log(deepCopyArray);



