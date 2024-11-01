
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
            <Heading scale={3}>代表的な趣味について</Heading>
            {[
                {
                    title: "情報",
                    content: "主にWeb関係を勉強していますが、Java・C++なども勉強しています。JavaScript関連の技術についてよく知っています。このサイトもReactを使って構成しています。",
                    links: [
                        { path: "/games/sf2024", text: "SF2024ゲーム" }
                    ]
                },
                {
                    title: "生物",
                    content: "生物という教科を勉強しています。この中ではもっとも好きな教科です。",
                    links: [
                        { path: "/blogs", text: "「生物について」トップ" }
                    ]
                },
                {
                    title: "数学",
                    content: "どちらかといえば、他の勉強のために必要なので勉強しています。得意ではありません。",
                    links: []
                },
                {
                    title: "化学",
                    content: "とても苦手なジャンルの一つで、非常に危機感を持っています。一応、一年前に高校範囲は一周したつもりですが、特に、有機化学が怪しいです。",
                    links: []
                },
                {
                    title: "地学",
                    content: "最近、はじめたジャンルで、今一番興味を持っています。今、一番勉強しています。",
                    links: []
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