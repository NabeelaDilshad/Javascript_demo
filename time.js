let newDate = new Date()

Math.floor(newDate.toLocaleString('default', {
    weekday: "long"
}))
console.log(newDate)