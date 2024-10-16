import React from "react";
import Heading from "./mini/heading";
import Error from "./mini/Error";

const styles = {
    normal: {

    },
    dark: {

    }
}

function DocumentWrapper({ headingText="", children, layer=1 }: { children: React.ReactNode, headingText: string, layer: number }) {
    return (
        <>
            <div style={styles.normal} id="documentWrapper">
                <Heading scale={layer}>{headingText}</Heading>
                {children}
            </div>
        </>
    )
}

function Document() {

}

function DocumentIndex() {
    const documentWrapperEle = document.getElementById("documentWrapper");
    if (documentWrapperEle == null) return (
        <>
            <Error>documentWrapperObjectが設置されていないので、目次を表示できません</Error>
        </>
    );
    const headings = Array.from(documentWrapperEle.querySelectorAll("h1, h2, h3"));
    const headingList = headings.map((heading) => {
        const headingText = heading.textContent;
        const headingId = heading.id;
        return (
            <li key={headingId}>
                <a href={`#${headingId}`}>
                    {headingText}
                </a>
            </li>
        )
    })
    return (
        <>
            <ul>
                {headingList}
            </ul>
        </>
    )
}

export {
    DocumentWrapper,
    Document,
    DocumentIndex
}