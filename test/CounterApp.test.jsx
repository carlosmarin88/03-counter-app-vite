import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from '../src/CounterApp'

describe('Pruebas en <CounterApp/>', () => {

    const initValue = 10;

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render(<CounterApp value={initValue} />)
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100', () => {

        render(<CounterApp value={100} />)
        //expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(initValue.toString());
        expect(screen.getByText(100)).toBeTruthy();
    });

    test('Debe de incrementar con el boton +1', () => {

        render(<CounterApp value={initValue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();

    });

    test('Debe de decrementar con el boton -1', () => {

        render(<CounterApp value={initValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();

    });

    test('Debe de funcionar el boton de reset', () => { 
        render(<CounterApp value={initValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', {name : 'btn-reset'}));

        expect(screen.getByText(initValue)).toBeTruthy();
     })

})