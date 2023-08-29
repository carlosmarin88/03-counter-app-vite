import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Test 02-template-string', ()=> {

    test('getSaludo debe de retornar "Hola Fernando"', ()=> {

        //arrange
        const name = 'Fernando';
        //act
        const message = getSaludo(name);
        //assert
        expect(message).toBe(`Hola ${name}`);
    });
});