import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../08-useReducer/TodoApp";
import { useTodos } from "../../hooks/useTodos";

jest.mock('../../hooks/useTodos');


describe('Pruebas en <TodoApp />', () => {
    test('debe de mostrar el componente correctamente', () => {

        useTodos.mockReturnValue({
            todos: [
                { id: 1, desc: 'Aprender React', done: false },
                { id: 2, desc: 'Aprender Mongo', done: false },
            ],
            todosCounter: 2,
            pendingTodosCounter: 1,
            handleNewTodo: jest.fn(),
            handleDeleteTodo: jest.fn(),
            handleToggleTodo: jest.fn(),
        });

        render(<TodoApp />);
        expect(screen.getByText('Aprender React')).toBeTruthy();
        expect(screen.getByText('Aprender Mongo')).toBeTruthy();

    })

})