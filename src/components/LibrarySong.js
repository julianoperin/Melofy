import React from "react";

const LibrarySong = () => {
  console.log(currentLibrarySong);
  return (
    <div className="library-song">
      <img src={currentSong.cover} alt={currentSong.name} />
      <h3>{currentSong.name}</h3>
      <h4>{currentSong.artist}</h4>
    </div>
  );
};

export default LibrarySong;
