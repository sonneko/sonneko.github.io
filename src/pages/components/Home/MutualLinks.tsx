function MutualLinks() {
    return (
        <>
            {[
                {url: "https://umaii.f5.si", text: "まずいだんご"}
            ].map(item => 
                <a href={item.url} key={item.url}>
                    {item.text}
                </a>
            )}
        </>
    )
}

export default MutualLinks;