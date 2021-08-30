const kg = 0.453592
const meter = 0.0254

function BMI(k, m) {
    k = k * kg
    m = m * meter
    let b = k / (m * m)
    return b
}
console.log(BMI(36.5, 39))
console.log(BMI(130.1, 66.53543307))
console.log(BMI(150, 88))