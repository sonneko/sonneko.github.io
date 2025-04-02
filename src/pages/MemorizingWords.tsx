import { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box, Button, Typography } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

type routerPath = "setting" | "learning";
type word = {
    en: string,
    ja: string,
    index: number
}
type range = { beginning: number, end: number };
type Form = {
    title: string;
    selection: {text: string, id: string}[];
}


class Setting {
    form: "text" | "select" | "check";
    direction: "ja-en" | "en-ja";
    range: range;
    selecter: "all" | number;
    constructor() {
        this.form = "check";
        this.direction = "en-ja";
        this.range = { beginning: 1, end: 1 };
        this.selecter = "all";
    }
}

function getRandomWords(data: word[], range: range) {
    const arr = [...Array(range.end - range.beginning + 1)].map((_, i) => i + range.beginning);
    while (arr.length) {
        const j = Math.floor(Math.random() * arr.length);
        const t = arr[--arr.length];
        arr[arr.length] = arr[j];
        arr[j] = t;
    }
    return arr.map((index) => {
        return data[arr[index]];
    });
}

function useWordsData() {
    const [data, setData] = useState<word[] | null>(null);
    useEffect(() => {
        fetch("/tools/memorizing-words/data.json").then(res => res.json()).then(json => {
            setData(json);
        })
    }, [])
    return data;
}

function SelectForm({form}: {form: Form}) {
    return (
        <Box sx={{ minWidth: 120 }}>
            <Typography variant="h5">{form.title}</Typography>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={"d"}
                    onChange={(event: SelectChangeEvent) => {

                    }}
                >
                    {form.selection.map(item => {
                        return <></>;
                    })}
                </Select>
            </FormControl>
        </Box>
    )
}


function MemorizingWords() {
    // hook
    const [routerPath, setRouterPath] = useState<routerPath>("setting");
    const [setting, setSetting] = useState<Setting>(new Setting());
    const wordData: word[] | null = useWordsData();


    if (routerPath == "setting") {
        return (
            <>
                <SelectForm form={{title: "方向"}} selection={[{text: "", id: ""}]}/>
                <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
                    <Button variant="outlined">設定を確認してテストを始める</Button>
                </Box>
            </>
        )
    } else if (routerPath == "learning") {
        return (
            <>

            </>
        )
    }
}

export default MemorizingWords;