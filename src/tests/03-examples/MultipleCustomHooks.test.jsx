import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";


jest.mock('../../hooks/useFetch')
jest.mock('../../hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defecto', () => {


        useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });

        render(<MultipleCustomHooks />);

        // se puede hacer con el snapshot

        // eslint-disable-next-line jest/valid-expect
        expect(screen.getByText('Loading...'));

        // eslint-disable-next-line jest/valid-expect
        expect(screen.getByText('Rick & Morty'));

        const nextButton = screen.getByRole('button', { name: 'Next location' });

        expect(nextButton.disabled).toBeTruthy();


    });


    test('debe de mostrar una location', () => {

        useFetch.mockReturnValue({
            data: { name: 'Fran', type: "Ni idea" },
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Fran')).toBeTruthy();
        expect(screen.getByText('Ni idea')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next location' });

        expect(nextButton.disabled).toBeFalsy();
    })


    test('debe de llamar a incrementar', () => {

        useFetch.mockReturnValue({
            data: { name: 'Fran', type: "Ni idea" },
            isLoading: false,
            hasError: null
        });




        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next location' });

        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    })



});