import { memo } from 'react';


// eslint-disable-next-line react/prop-types, react/display-name
export const Small = memo(({ value }) => {
    console.log('Me volví a llamar :(');
    return (
        <small>{value}</small>
    )
})
