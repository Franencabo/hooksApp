import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";

describe('Pruebas en <MultipleCustomHooks />', () => {
    test('debe de mostrar el componente por defecto', () => {

        render(<MultipleCustomHooks />);

        // se puede hacer con el snapshot

        // eslint-disable-next-line jest/valid-expect
        expect(screen.getByText('Loading...'));
        // eslint-disable-next-line jest/valid-expect
        expect(screen.getByText('Rick & Morty'));

        const nextButton = screen.getByRole('button', { name: 'Next location' });

        expect(nextButton.disabled).toBeTruthy();


    });
});