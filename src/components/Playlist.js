import React, { useState } from "react";
import Tracklist from "./Tracklist";

function Playlist({ songs, handleRemoveFromPlaylist, handleSaveToSpotify }) {
  const [name, setName] = useState("");

  const nameChange = ({ target }) => {
    setName(target.value);
  };

  const onButtonClick = () => {
    handleSaveToSpotify(name);
  };

  return (
    <>
      <input type="text" value={name} onChange={nameChange} />
      <Tracklist
        songs={songs}
        handleButtonClick={handleRemoveFromPlaylist}
        buttonSign="-"
      />
      <button onClick={onButtonClick}>Save playlist to Spotify</button>
    </>
  );
}

export default Playlist;
