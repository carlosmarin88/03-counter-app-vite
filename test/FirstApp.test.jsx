import { getAllByAltText, render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp/>', () => {

    // test('debe de hacer match con el snapshot', () => {
    //     const title = 'Hola, soy Goku';
    //     const { container } = render(<FirstApp title={title} />);

    //     console.log(container);
    //     expect(container).toMatchSnapshot();
    // });

    test('debe de mostrar el titulo en un h1', () => {
        const title = 'Hola, soy Goku';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
        expect(getByTestId('test-title')).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por props', () => { 
        const title = 'Hola, soy Goku';
        const subTitle = 'Soy un subtitle';

        const {getByText, getByTestId} = render(
        <FirstApp 
            title={title} 
            subTitle={subTitle}
        />);
        expect(getByText(subTitle)).toBeTruthy();
        // si tuviera el subtitle mas de una vez haria la validacion de la siguiente manera
        //expect(getAllByAltText(subTitle).length).toBe(2);    

     });    
});