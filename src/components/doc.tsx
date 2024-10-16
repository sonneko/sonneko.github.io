

import React, { useEffect } from "react";
import { useState } from "react";

import Index from "./Index";

const styles = {
    normal: {

    },
    dark: {

    }
}

function DocumentWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div style={styles.normal} id="documentWrapper">
                {children}
            </div>
        </>
    )
}

function Document() {

}

function DocumentIndex() {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        if (!isLoaded) {
            setIsLoaded(true);
        }
    })
    if (!isLoaded) return (
        <>
            読み込み中.............
        </>
    )
    return (
        <>
            <Index />
        </>
    )
}

export {
    DocumentWrapper,
    Document,
    DocumentIndex
}