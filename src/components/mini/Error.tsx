import React from 'react';



const styles = {
    span: {
        color: "red",
    },
    div: {
        backgroundColor: "yellow",
        border: "dotted red 5px",
        padding: "5px"
    }
}

function Error({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div style={styles.div}>
                <span style={styles.span}>{children}</span>
            </div>
        </>
    )
}

export default Error;