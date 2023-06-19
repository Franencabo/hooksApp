
import { useForm } from "../hooks/useForm"

// eslint-disable-next-line react/prop-types
export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
    }


    return (

        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />

            <button type="submit"
                className="btn btn-primary mt-2">
                Agregar
            </button>
        </form>

    )
}
