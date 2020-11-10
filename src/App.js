import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";

// Scss
import "./styles/app.scss";

//Import Util
import { data } from "./util";

function App() {
  const [songs, setSongs] = useState(data);
  console.log(songs);

  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
