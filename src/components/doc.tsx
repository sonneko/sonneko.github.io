import React, { useEffect } from "react";
import { useState } from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Index from "./Index";
import Heading from "./mini/heading";
import RoutingDisplay from "./mini/RoutingDisplay";

import './css/doc.css'

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

function Document({children, pageTitle, ogpImagePath} : {children: React.ReactNode, pageTitle: String, ogpImagePath: string}) {
    return (
        <>
            <div className="header">
                <Heading scale={1}>{pageTitle}</Heading>
                <RoutingDisplay />
                <div className="header-ogpImage-container">
                    <img src={ogpImagePath} style={{width: "100%"}}/>
                </div>
            </div>
            <DocumentIndex />
            {children}
            <div className="footer">

            </div>
        </>
    )
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
            <Accordion
                sx={{
                    maxWidth: "100%",
                    width: "100%",
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="index-accordion"
                >
                    目次
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
            </Accordion>
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