function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}


it('should ensure function sum return numbers added correctly', () => {
    const firstNumber = Math.floor(Math.random() * 10)
    const secondNumber = Math.floor(Math.random() * 10)

    const result = sum(firstNumber, secondNumber)

    assert.toEqual(result, firstNumber + secondNumber)
})