
import { useCounter, useFetch } from "../hooks";
import { City, LoadingQuote } from ".";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/location/${counter}`);


    const { name, type } = !!data && data;

    console.log(data);
    return (
        <>
            <h1>Rick & Morty</h1>

            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <City name={name} type={type} />
            }

            <button
                className="btn btn-primary"
                disabled={isLoading}
                onClick={increment}>
                Next location
            </button>

        </>
    )
}
