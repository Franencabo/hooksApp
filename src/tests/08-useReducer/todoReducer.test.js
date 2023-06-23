import { todoReducer } from "../../08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      desc: "Demo Todo",
      done: false,
    },
  ];

  test("debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("debe de agregar un TODO", () => {
    const action = {
      type: "add",
      payload: {
        id: 2,
        desc: "Demo Todo 2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("debe de borrar un TODO", () => {
    const action = {
      type: "delete",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test("debe de hacer el TOGGLE del TODO", () => {
    const action = {
      type: "toggle",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
