
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, isValidForm, username, email, password } = useForm({
        username: "",
        email: "",
        password: "",
    });


    return (
        <>
            <h1>Form with custom hook</h1>

            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="francisco@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button
                onClick={() => { if (isValidForm()) { console.log(formState) } }}
                className="btn btn-primary mt-2"
                disabled={!isValidForm()}
            >
                Submit
            </button>

            <button
                onClick={onResetForm}
                disabled={!isValidForm}
                className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}
