/*
    自作の簡単なレンダリングエンジン
*/

function engine() {
    const rootEle = document.getElementById("root");

    function add(elementType, children) {
        const newElement = document.createElement(elementType);
        newElement.appendChild(children);
        rootEle.appendChild(newElement);
    }
}