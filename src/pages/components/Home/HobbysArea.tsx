
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import Space from "../../../components/mini/Space";
import Heading from "../../../components/mini/heading";


function HobbyArea() {
    return (
        <>
            <Space size={1.2} />
            <Heading scale={4}>代表的な趣味について</Heading>
            {[
                {
                    title: "プログラミング関係",
                    content: "主にWeb関係を勉強していますが、Java・C++なども勉強しています。JavaScript関連の技術についてよく知っています。このサイトもReactを使って構成しています。",
                    links: [
                        { path: "/games/sf2024", text: "SF2024ゲーム" }
                    ]
                },
                {
                    title: "c",
                    content: "dd",
                    links: [
                        { path: "/games/sf2024", text: "SF2024ゲム" }
                    ]
                },
                {
                    title: "dd",
                    content: "dd",
                    links: [
                        { path: "/games/sf2024", text: "SF2024ーム" }
                    ]
                }
            ].map((item, index) => (
                <Accordion key={`hobby-list-${index}`}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel-content-${index}`}
                        id={`panel-header-${index}`}
                    >
                        {item.title}
                    </AccordionSummary>
                    <AccordionDetails>
                        {item.content}
                        {item.links.map((link, linkIndex) => (
                            <Link to={link.path} key={`link-list-${index}-${linkIndex}`}>
                                {link.text}
                            </Link>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    );
}

export default HobbyArea;