let newDate = new Date()

Math.floor(newDate.toLocaleString('default', {
    weekday: "narrow"
}))
console.log(newDate)