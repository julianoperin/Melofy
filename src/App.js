import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";

// Scss
import "./styles/app.scss";

//Import Util
import { data } from "./util";

function App() {
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  console.log(songs);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
