import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../SongsList.css"

export const SongsList = ({ selected, setSelected, songs, setSongs }) => {
    useEffect(() => {
        fetch("https://playground.4geeks.com/apis/fake/sound/songs")
            .then(response => response.json())
            .then((songsLocal) => setSongs(songsLocal)
                .catch(() => console.log("algo falló")))

        console.log("hola")
    }, [])

    return (<>
        {
            songs.map((song, index) => (
                <li key={song.name + index}>
                    <button disabled={selected.name === song.name} onClick={() => { setSelected(song) }}><p>{song.name}</p></button>
                </li>
            ))
        }
    </>
    )
} 