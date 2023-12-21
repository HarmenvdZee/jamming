import React from "react";
import Track from "./Track";

function Tracklist({ songs, buttonSign, handleButtonClick }) {
  return (
    <ul>
      {songs.map((song) => (
        <Track
          key={song.id}
          song={song}
          buttonSign={buttonSign}
          handleButtonClick={handleButtonClick}
        />
      ))}
    </ul>
  );
}

export default Tracklist;
