import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe retornar un heroe por ID', ()=> {

        const id = 1;
        const heroe = getHeroeById(id);

        console.log(heroe);
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById debe retornar un undefined si no existe', ()=> {

        const id = 100;
        const heroe = getHeroeById(id);

        console.log(heroe);
        expect(heroe).toBeFalsy();
    })

/**
 * Tarea:
 * Debe de retornar un arreglo con los heroes de DC
 * length === 3
 * toEqual al arreglo filtrado
 * 
 * debe de retornar un arreglo con los heroes de Marvel
 * length === 2
 */

    test('getHeroesByOwner debe poder filtrar por owner DC', ()=> {
    
        const heroesDC = getHeroesByOwner('DC');

        expect(heroesDC.length).toBe(3);
        expect(heroesDC).toEqual([
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
              ]
        );

    })

    test('getHeroesByOwner debe poder filtrar por owner Marvel', ()=> {
    
        const heroesMarvel = getHeroesByOwner('Marvel');
        expect(heroesMarvel.length).toBe(2);
        expect(heroesMarvel).toEqual( [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]);
    })


 })