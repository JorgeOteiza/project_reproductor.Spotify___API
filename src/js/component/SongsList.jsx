import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/SongsList.css";

export const SongsList = ({ selected, setSelected }) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch("https://playground.4geeks.com/apis/fake/sound/songs")
            .then(response => response.json())
            .then((songsLocal) => {
                if (Array.isArray(songsLocal)) {
                    setSongs(songsLocal);
                } else {
                    console.error("Expected an array but got:", songsLocal);
                }
            })
            .catch(() => console.log("algo falló"));

        console.log("hola");
    }, []);

    return (
        <section className="songs-container">
            <ul>
                {songs.map((song, index) => (
                    <li key={song.name + index}>
                        <button
                            disabled={selected?.name === song.name}
                            onClick={() => { setSelected(song) }}>
                            <p>{song.name}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
};
