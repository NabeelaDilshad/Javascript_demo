const array = [2, 6, 8, 9, 10, 5, 7, 10, 12, 17]
function findodd() {
    let newarray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            newarray.push(array[i])
        }

    }
    return newarray
}
const oddarray = findodd(array);
console.log(oddarray)