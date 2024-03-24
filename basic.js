// find minimum in the array
const array = [10, 20, 50, 70, 3, 80]
function minimum() {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min;
}
const r = minimum(array)
console.log(r)