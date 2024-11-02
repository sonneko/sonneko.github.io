import { useContext } from "react";

import { sf2024context } from "../context";

function Root() {
    const context = useContext(sf2024context)

    return (
        <>
            <div className='root'>
                <h1 className="first-heading main-title">Aoristos</h1>
                <h1 className="second-heading main-title">有志企画</h1>
                <p className='start-btn' onClick={() => { context.navigation("/home") }}>＜タップしてスタート＞</p>
            </div>
        </>
    )
}

export default Root;