import React, { useState } from "react";
import "../../styles/Controls.css";

export const Controls = ({ selected, goPrev, goNext }) => {
    const [play, setPlay] = useState(false);

    return (
        <section className="controls-container">
            <button onClick={() => goPrev(selected)}>
                <i className="fa-solid fa-backward"></i>
            </button>
            <button onClick={() => setPlay(!play)}>
                {play ? <i className="fa-solid fa-stop"></i> : <i className="fa-solid fa-circle-play"></i>} {play ? 'Stop' : 'Play'}
            </button>
            {play && (
                <audio src={"https://assets.breatheco.de/apis/sound/" + selected.url} autoPlay>
                    Your browser does not support the <code>audio</code> element.
                </audio>
            )}
            <button onClick={() => goNext(selected)}>
                <i className="fa-solid fa-forward"></i>
            </button>
        </section>
    );
};
