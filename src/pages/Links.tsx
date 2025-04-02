import Heading from "../components/mini/heading";
import { List, ListItem, Typography } from "@mui/material";
import * as Doc from "../components/doc";
import Space from "../components/mini/Space";

function Links() {
    return (
        <>
            <Doc.Document pageTitle={"Sonnekoの作ったアプリのリンク一覧"} ogpImagePath={null} isIndent={false} isRoutingDisplay={false}>
                <Heading scale={1}>リンク集</Heading>
                <Space size={1} />
                <Typography variant="body1" gutterBottom>
                    Sonnekoがこれまでに作ったアプリなどをここで紹介しています。
                </Typography>
                <Space size={2} />
                <Doc.DocumentWrapper>
                    <Heading scale={2}>一覧</Heading>
                    <List>
                        <ListItem>
                            <Typography component="a" href="/chat">
                                ちょっとだけチャットシステム
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography component="a" href="/tools/memorizing-words">
                                単語覚えツール
                            </Typography>
                        </ListItem>
                    </List>
                </Doc.DocumentWrapper>
            </Doc.Document>
        </>
    )
}

export default Links;