
import React from 'react';

// eslint-disable-next-line react/prop-types, react/display-name
export const ShowIncrement = React.memo(({ increment }) => {


    console.log('Me volví a generar :(');
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(5);
            }}>
            Incrementar
        </button>
    )
})
