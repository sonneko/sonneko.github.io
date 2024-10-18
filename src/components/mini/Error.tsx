import React from 'react';

const style = {
    color: "red"
}

function Error({children}: {children: React.ReactNode}) {
    return (
        <>
            <span style={style}>{children}</span>
        </>
    )
}

export default Error;