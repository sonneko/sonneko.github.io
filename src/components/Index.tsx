import Error from "./mini/Error";

import './css/Index.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Index() {
    // 要素取得
    const documentWrapperEle = document.getElementById("documentWrapper");

    // 要素がない可能性
    if (documentWrapperEle == null) return (
        <>
            <Error>エラー：documentWrapperObjectが設置されていないので、目次を表示できません</Error>
        </>
    );
    const headings = Array.from(documentWrapperEle.querySelectorAll("h1, h2, h3"));
    const headingList = headings.map((heading) => {
        const headingText = heading.textContent;
        const headingId = heading.id;
        return (
            <>
                <li><a href={'#' + headingId}>{headingText}</a></li>
            </>
        )
    })
    return (
        <>
            <Accordion
                sx={{
                    width: "70%",
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="index-accordion"
                >
                    目次
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        {headingList}
                    </ul>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default Index;