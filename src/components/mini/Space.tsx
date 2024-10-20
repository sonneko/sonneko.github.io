function Space({size}: {size: number}) {
    return (
        <div style={{ minHeight: `${20 * size}px` }}></div>
    )
}

export default Space;