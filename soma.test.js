const {funcaoDeSoma} = require('./funcoesSomatoria')

test('Teste 1 - Soma', () => {
    expect(funcaoDeSoma(5,4)).toEqual(9)
    expect(funcaoDeSoma(5,4)).toBe(9)
    expect(funcaoDeSoma(3,3)).toBe(6)
    expect(funcaoDeSoma(1,1)).toEqual(2)
});