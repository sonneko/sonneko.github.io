import { useEffect, useState } from "react";
import Error from "./mini/Error";
import * as constant from "../global/const";

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
        fetch(`${BACK_URL}/articles/new/8`)
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
        return <p>Loading...</p>; // データ取得中の表示
    }

    if (fetchData.status === "ok") {
        const arrays = fetchData.array;
        return (
            <>
                {arrays.map((item, index) => (
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))}
            </>
        );
    } else {
        return (
            <>
                <Error>データが正しく取得できませんでした。</Error>
            </>
        );
    }
}

export default Articles;