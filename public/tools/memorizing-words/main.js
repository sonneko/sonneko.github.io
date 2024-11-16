/*!
    source code is writen by sonneko.
    This is a memorizing words tool.
    Copyright (c) 2023 sonneko
    Released under the MIT license
    https://opensource.org/licenses/mit-license.php 
*/

const wordsList = [
    { ja: "りんご", en: "apple" },
    { ja: "ぶとう", en: "grape" },
    { ja: "きゅうり", en: "cucumber" },
    { ja: "単語", en: "word" },
];

window.onload = () => {
    main();
};

async function main() {
    const questionLength = 40;

    // 単語データ取得
    const data = await fetch("./data.json").then((res) => res.json());
    let randomNum = [];
    for (let i = 0; i <= questionLength; i++) {
        randomNum.push(Math.round(Math.random() * data.length));
    }
    const wordsList = randomNum.map((item) => {
        return data[item];
    });
    wordsList.push({ja: "おわり", en: "再読み込みして再チャレンジ"});

    const pagesEle = {
        root: document.getElementById("page-root"),
        register: document.getElementById("page-register"),
        question: document.getElementById("page-question"),
    };
    pagesEle.register.style.display = "none";
    pagesEle.question.style.display = "none";

    // event listener
    document.getElementById("root-btn").addEventListener("click", () => {
        pagesEle.root.style.display = "block";
        pagesEle.register.style.display = "none";
        pagesEle.question.style.display = "none";
    });
    document.getElementById("register-btn").addEventListener("click", () => {
        pagesEle.root.style.display = "none";
        pagesEle.register.style.display = "block";
        pagesEle.question.style.display = "none";
    });
    document.getElementById("question-btn").addEventListener("click", () => {
        pagesEle.root.style.display = "none";
        pagesEle.register.style.display = "none";
        pagesEle.question.style.display = "block";
    });

    
    //progress bar manager
    const progressEle = document.getElementById("progress");
    progressEle.setAttribute("max", questionLength);
    function rewriteProgress() {
        progressEle.setAttribute("value", questionIndex);
    }

    // manage question page
    const btnBefore = document.getElementById("btns-before");
    const btnAfter = document.getElementById("btns-after");
    questionStatus = true;
    questionIndex = 0;
    function questionChangeStatus() {
        rewriteProgress();
        setTimeout(() => {
            if (questionStatus) {
                btnAfter.style.display = "block";
                btnBefore.style.display = "none";
                document.getElementById("question-content").innerText =
                    wordsList[questionIndex].ja;
                questionStatus = false;
            } else {
                btnAfter.style.display = "none";
                btnBefore.style.display = "block";
                document.getElementById("question-content").innerText =
                    wordsList[questionIndex].en;
                questionStatus = true;
                questionIndex++;
            }
        }, 250);
    }
    questionChangeStatus();
    btnAfter.addEventListener("click", questionChangeStatus);
    btnBefore.addEventListener("click", questionChangeStatus);
}
