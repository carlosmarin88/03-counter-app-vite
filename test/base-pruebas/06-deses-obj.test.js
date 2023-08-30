import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => { 

    test("recovery usContext", ()=> {

        const person = {
            clave: 'ABC123',
            edad: 34,
            food: 'pasta',
        }



        const context = usContext(person);

        expect(context).toEqual({
                nombreClave: person.clave,
                anios: person.edad,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
            })
    })

 });