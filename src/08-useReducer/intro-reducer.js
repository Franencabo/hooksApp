const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del infinito",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "add") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

// Podría parecer que para añadir una nueva tarea, solo tendríamos que hacer un push al arreglo, pero esto no es correcto, ya que estaríamos mutando el estado, y esto no es correcto, ya que el reducer debe ser una función pura, es decir, que no debe tener efectos secundarios, ni mutar el estado, sino que debe retornar un nuevo estado.

// todos.push({    // Mutando el estado
//     id: 2,
//     todo: "Recolectar las gemas del infinito",
//     done: false,
// });

const newTodo = {
  id: 2,
  todo: "Recolectar las gemas del infinito",
  done: false,
};

const addTodoAction = {
  type: "add",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
