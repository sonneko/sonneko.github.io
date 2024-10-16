import Error from "./mini/Error";

import './css/Index.css'

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
            <ul>
                {headingList}
            </ul>
        </>
    )
}

export default Index;