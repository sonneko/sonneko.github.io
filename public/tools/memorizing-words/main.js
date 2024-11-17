/*!
    source code is writen by sonneko.
    This is a memorizing words tool.
    Copyright (c) 2023 sonneko
    Released under the MIT license
    https://opensource.org/licenses/mit-license.php 
*/

main();

async function main() {
    let wordsList;
    const form = {
        style: document.getElementById("form-style"),
        direc: document.getElementById("form-direc"),
        range: document.getElementById("form-range"),
        rangeCustom: {
            from: document.getElementById("form-range-custom-from"),
            to: document.getElementById("form-range-custom-to")
        },
        selecting: document.getElementById("form-selecting"),
        selectingCustom: {
            num: document.getElementById("form-selecting-custom-num")
        }
    }
    function initForm() {
        const out = {
            style: form.style.value,
            direc: form.direc.value,
            range: form.range.value,
            rangeFrom: form.rangeCustom.from.value,
            rangeTo: form.rangeCustom.to.value,
            selecting: form.selecting.value,
            selectingNum: form.selectingCustom.num.value
        }
        if (out.style == "undefined") return "error";
        if (out.direc == "undefined") return "error";
        if (out.range == "undefined") return "error";
        if (out.selecting == "undefined") return "error";
        if (out.range == "custom") {
            if (isNaN(out.rangeFrom)) return "error";
            if (isNaN(out.rangeTo)) return "error";
        }
        if (out.selecting == "custom") {
            if (isNaN(out.selectingNum)) return "error";
        }
        return out;
    }
    // 単語データ取得
    const data = await fetch("./data.json").then((res) => res.json());
    document.getElementById("startBtn").addEventListener("click", () => {
        const inited = initForm();
        if (inited == "error") {
            document.getElementById("form-error-display").innerHTML = `<h1 style="color: red;">設定項目に不備があります。</h1>`
            return;
        }
        document.getElementById("form-error-display").innerHTML = "";
        pagesEle.root.style.display = "none";
        pagesEle.register.style.display = "none";
        pagesEle.question.style.display = "block";

        let dataBefore;
        if (inited.range == "all") {
            dataBefore = data;
        } else if (inited.range == "test1") {
            dataBefore = data.slice(600, 674);
        } else if (inited.range == "test2") {
            dataBefore = data.slice(675, 749);
        } else if (inited.range == "test3") {
            dataBefore = data.slice(750, 799);
        } else if (inited.range = "custom") {
            dataBefore = data.slice(inited.rangeFrom - 1, inited.rangeTo - 1);
        }

        if (inited.selecting == "all") {
            wordsList = dataBefore;
        } else if (inited.selecting == "custom") {
            let randomNum = [];
            for (let i = 0; i < inited.selectingNum; i++) {
                let isExit = true;
                let random;
                while (isExit) {
                    isExit = false;
                    random = Math.round(Math.random() * dataBefore.length);
                    randomNum.forEach((item) => {
                        if (item == random) isExit = true;
                    });
                }
                randomNum.push(random);
            }
            wordsList = randomNum.map((item) => {
                return dataBefore[item];
            });
        }
        wordsList.push({ ja: "おわり", en: "再読み込みして再チャレンジ" });

        //progress bar manager
        const progressEle = document.getElementById("progress");
        progressEle.setAttribute("max", wordsList.length);
        function rewriteProgress(nowIndex) {
            progressEle.setAttribute("value", nowIndex);
        }

        questionChangeStatus(inited, rewriteProgress);
        btnAfter.addEventListener("click", () => {
            questionChangeStatus(inited, rewriteProgress);
        });
        btnBefore.addEventListener("click", () => {
            questionChangeStatus(inited, rewriteProgress);
        });
    })
    const checkFormValue = () => {
        const rangeSelected = form.range.value;
        const selectingSelected = form.selecting.value;
        if (rangeSelected == "custom") {
            form.rangeCustom.from.removeAttribute("disabled");
            form.rangeCustom.to.removeAttribute("disabled");
        } else {
            form.rangeCustom.from.setAttribute("disabled", "true");
            form.rangeCustom.to.setAttribute("disabled", "true");
        }
        if (selectingSelected == "custom") {
            form.selectingCustom.num.removeAttribute("disabled");
        } else {
            form.selectingCustom.num.setAttribute("disabled", "true");
        }
    };
    checkFormValue();
    form.range.addEventListener("change", checkFormValue);
    form.selecting.addEventListener("change", checkFormValue);

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

    // manage question page
    const btnBefore = document.getElementById("btns-before");
    const btnAfter = document.getElementById("btns-after");
    const btnTextBox = document.getElementById("btns-textBox");
    questionStatus = true;
    questionIndex = 0;
    function questionChangeStatus(props, rewriteProgress) {
        btnAfter.style.display = "none";
        btnBefore.style.display = "none";
        btnTextBox.style.display = "none";
        rewriteProgress(questionIndex);
        setTimeout(() => {
            if (questionStatus) {
                if (props.style == "check") {
                    // 確認ボタンの表示
                    btnAfter.style.display = "block";
                    btnBefore.style.display = "none";
                } else if (props.style == "select") {
                    // 選択肢ボタンの表示
                } else if (props.style == "text") {
                    // テキストボックスの表示
                    btnTextBox.style.display = "block";
                }
                document.getElementById("question-content").innerText = props.direc == "enToJa" ?
                    wordsList[questionIndex].en : wordsList[questionIndex].ja;
                questionStatus = false;
            } else {
                if (props.style == "check") {
                    // 確認ボタンの表示
                    btnAfter.style.display = "none";
                    btnBefore.style.display = "block";
                } else if (props.style == "select") {
                    // 選択肢ボタンの表示
                } else if (props.style == "text") {
                    // テキストボックスの表示

                }
                document.getElementById("question-content").innerText = props.direc == "jaToEn" ?
                    wordsList[questionIndex].en : wordsList[questionIndex].ja;
                questionStatus = true;
                questionIndex++;
            }
        }, 250);
    }
}
