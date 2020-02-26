const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Should conver fahrenheit to celsius', () => {
    const celsius = fahrenheitToCelsius(32)
    expect(celsius).toBe(0)
})

test('Should conver fahrenheit to celsius', () => {
    const fahrenheit = celsiusToFahrenheit(0)
    expect(fahrenheit).toBe(32)
})