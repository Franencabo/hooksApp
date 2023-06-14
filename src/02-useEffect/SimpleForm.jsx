import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState(
        {
            username: 'rhyno',
            email: 'francisco@gmail.com'
        }
    );

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('useEffect');
    }, []);

    useEffect(() => {
        // console.log('formState changed');
    }, [formState]);



    useEffect(() => {
        // console.log('email changed');
    }, [email]);




    return (
        <>
            <h1>SimpleForm</h1>

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

            {
                (username === 'rhyno2') && <Message />
            }



        </>
    )
}
