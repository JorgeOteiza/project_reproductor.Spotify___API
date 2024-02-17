import React, { useState } from "react";
import { faBackward, faCirclePlay, faForward, faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../../styles/Controls.css";

export const Controls = ({ selected, goPrev, goNext }) => {
    const [play, setPlay] = useState(false);

    return (
        <section className="controls-container">
            <button onClick={() => goPrev(selected)}>
                <FontAwesomeIcon icon={faBackward} size="2x" />
            </button>
            <button onClick={() => setPlay(!play)}>
                {play ? <FontAwesomeIcon icon={faStopCircle} size="2x" /> : <FontAwesomeIcon icon={faCirclePlay} size="2x" />}
            </button>
            {play && (
                <audio src={"https://assets.breatheco.de/apis/sound/" + selected.url} autoPlay>
                    Your browser does not support the <code>audio</code> element.
                </audio>
            )}
            <button onClick={() => goNext(selected)}>
                <FontAwesomeIcon icon={faForward} size="2x" />
            </button>
        </section>
    );


};