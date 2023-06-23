import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe('Pruebas en <TodoItem />', () => {
    const todo = {
        id: 1,
        desc: 'Aprender React',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el Todo Pendiente de completar', () => {

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');


        const spanElement = screen.getByLabelText('span');
        expect((spanElement.className.trim())).toBe('align-self-center');

    })


    test('debe de mostrar el Todo Completado', () => {
        todo.done = true;

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);


        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');

    })


    test('span debe de llamar el ToggleTodo cuando se hace click', () => {

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);


        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    })

    test('button debe de llamar el deleteTodo', () => {

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);


        const deleteButton = screen.getByLabelText('button-delete');
        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    })


})