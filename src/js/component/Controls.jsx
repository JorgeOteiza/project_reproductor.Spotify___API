import React, { useState } from "react"
import "../../Controls.css"

export const Controls = ({ selected, goPrev, goNext }) => {
    const [play, setPlay] = useState(false);

    return (<section style={{ display: "flex" }}>
        <button onClick={() => goPrev(selected)}>anterior</button>
        <button onClick={() => setPlay(!play)}>{play ? 'stop' : 'play'}</button>
        {
            play &&
            <audio src={"https://assets.breatheco.de/apis/sound/" + selected.url} autoPlay>
                Your browser does not support the <code>audio</code> element.
            </audio>
        }
        <button onClick={() => goNext(selected)}>siguiente</button>
    </section>)
} 