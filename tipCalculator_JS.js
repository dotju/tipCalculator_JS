const tipCalc = function (amount, tip) {
    const percent = Math.round((tip * amount) / 100)
    const total = amount + percent
    return `$${amount} of %${tip} tip:($${percent})  Total:($${total}) `
}
console.log(tipCalc('Total_Bill', 'Tip_Percent'))