export class Matemagica {
    sum(a, b) {

        if(typeof a !== 'number' || typeof b !== 'number') {
            return 'Você só pode realizar somas com operadores numéricos!'
        }
        return a + b
    }
}