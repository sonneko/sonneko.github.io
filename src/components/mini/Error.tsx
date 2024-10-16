const style = {
    color: "red"
}

function Error({children}: {children: string}) {
    return (
        <>
            <span style={style}>{children}</span>
        </>
    )
}

export default Error;