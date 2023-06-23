import { render, screen } from "@testing-library/react"
import { HomePage } from "../../09-useContext/HomePage";
import { UserContext } from "../../09-useContext/context/UserContext";

describe('Pruebas en <HomePage />', () => {

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const h2Tag = screen.getByLabelText('h2');
        expect(h2Tag.innerHTML).toBe('');
    })


    test('debe de mostrar el componente con el usuario', () => {

        const user = {
            id: 1,
            name: 'Fran',
            email: 'franencabo@gmail.com'
        }

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const h2Tag = screen.getByLabelText('h2');
        expect(h2Tag.innerHTML).toContain(user.name);


    });

})