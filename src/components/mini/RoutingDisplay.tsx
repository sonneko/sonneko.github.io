import Error from "./Error";

function RoutingDisplay() {
    const nowUrl = window.location.pathname;
    if (nowUrl == "/") {
        return (
            <>
                <Error>
                    /src/components/mini/RoutingDisplay.tsx：このページはルートであるためルーティング構造表示ができません<br />
                    このページのpage componentsから、RoutingDisplayを非表示に設定します。
                </Error>
            </>
        )
    }
    const pathArray = nowUrl.split("/");
    for (let i = 0 ; i < pathArray.length ; i++) {
        console.log(pathArray[i]);
    }
    return (
        <>
            
        </>
    )
}

export default RoutingDisplay;