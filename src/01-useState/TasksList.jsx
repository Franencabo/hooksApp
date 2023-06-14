import { useState } from "react"

export const TasksList = () => {

    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {

        // le damos un id a cada tarea basado en la fecha y hora actual
        // para no tener que buscar un indicador único en el indice del array
        const newTask = {
            id: new Date().getTime(),
            text: task
        }
        setTodos([...todos, newTask]);
        setTask('');
    }



    return (
        <>
            <h1>Tasks List</h1>

            <div className="input-group">

                <input
                    className="form-control"
                    type="text"
                    placeholder="Your task here..."
                    name="task"
                    value={task}
                    onChange={e => setTask(e.target.value)} />

                <button className="btn btn-primary" onClick={addTodo}>Add</button>

            </div>


            <hr />

            <ul>
                {todos.map((todo) =>
                    <li key={todo.id}>{todo.text}</li>
                )}
            </ul>
        </>
    )
}
