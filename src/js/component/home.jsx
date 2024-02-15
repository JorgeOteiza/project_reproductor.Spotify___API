import React, { useEffect, useState } from "react";

//include images into your bundle
import { SongsList } from "./SongsList";
import { Controls } from "./Controls";

//create your first component
const Home = () => {

	const [selected, setSelected] = useState([]);
	const [songs, setSongs] = useState([]);

	const goPrev = (current) => {
		const index = songs.findIndex(song => song.name === current.name);
		setSelected(songs[index - 1])
	}
	const goNext = (current) => {
		const index = songs.findIndex(song => song.name === current.name);
		setSelected(songs[index + 1])
	}

	return (
		<section>
			<SongsList selected={selected} setSelected={setSelected} songs={songs} setSongs={setSongs} />
			<Controls selected={selected} goPrev={goPrev} goNext={goNext} />
		</section>
	);
};

export default Home;
