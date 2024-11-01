import { useEffect, useState } from "react";
import { Canvas } from "../../class/games/grid";


function SF2024Game() {
    const [myCanvas, setMyCanvas] = useState(new Canvas(3,3));

    useEffect(() => {
        // ここに処理
        console.log(myCanvas.items)
    },[])
    return (
        <>
            <table>
                {myCanvas.items.map((items, index) => {
                    return (
                        <tr>
                            <td>
                                {myCanvas.items[index].map((item) => {
                                    return (
                                        <div style={{
                                            height: "100px",
                                            width: "100px",
                                            backgroundColor: item.color
                                       }}></div>
                                    )
                                })}
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default SF2024Game;