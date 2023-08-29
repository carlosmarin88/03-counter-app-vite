/*
    vamos agregar una dependencia para ayudarnos a encontrar todos los matchers
    yarn add -D @types/jest
*/

describe('Test in <DemoComponent/>', () => { 


    test('This test must not fail', () => {

        //arrange
        const message1 = 'Hola Mundo';
        //act
        const message2 = message1.trim();
        //assert
        expect(message1).toBe(message2);
    })

 });
