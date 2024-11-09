import { useEffect, useState } from "react";
import Error from "./mini/Error";
import * as constant from "../global/const";
import FetchingData from "./mini/fetchingData";
import { Paper } from "@mui/material";

const BACK_URL = constant.BACKEND_SERVICE_URL;

// 記事のデータ型定義
interface Article {
    title: string;
    body: string;
}

interface FetchData {
    status: string;
    array: Article[];
}

function Articles() {
    const [fetchData, setFetchData] = useState<FetchData | null>(null);

    useEffect(() => {
        fetch(`${BACK_URL}/articles/latest`)
            .then((res) => {
                if (!res.ok) {
                    console.log("ネットワークに問題が発生しました。")
                }
                return res.json();
            })
            .then((data: FetchData) => {
                setFetchData(data);
            })
            .catch((err) => {
                console.log(err);
                setFetchData({ status: 'error', array: [] }); // エラーの場合の状態管理
            });
    }, []);

    if (fetchData === null) {
        return (
            <Paper sx={{ textAlign: 'center', paddingTop: '3rem', paddingBottom: '3rem' }}>
                <FetchingData />
            </Paper>
        ); // データ取得中の表示
    }

    if (fetchData.status === "ok") {
        const arrays = fetchData.array;
        return (
            <>
                {arrays.map((item, index) => (
                    <Paper key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </Paper>
                ))}
            </>
        );
    } else {
        return (
            <>
                <Paper sx={{ padding: '1rem', height: '60vh' }}>
                    <Error>データを正しく取得できませんでした。</Error>
                </Paper>
            </>
        );
    }
}

export default Articles;