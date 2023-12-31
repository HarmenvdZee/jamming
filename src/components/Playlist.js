import React, { useState } from "react";
import Tracklist from "./Tracklist";
import styles from "../styles/Playlist.module.css";

function Playlist({ songs, handleRemoveFromPlaylist, handleSaveToSpotify }) {
  const [name, setName] = useState("");

  const nameChange = ({ target }) => {
    setName(target.value);
  };

  const onButtonClick = () => {
    handleSaveToSpotify(name);
    setName("");
  };

  return (
    <div className={styles.playlist}>
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={nameChange}
      />
      <br />
      <button className={styles.button} onClick={onButtonClick}>
        Save playlist to Spotify
      </button>
      <br />
      <Tracklist
        songs={songs}
        handleButtonClick={handleRemoveFromPlaylist}
        buttonSign="-"
      />
    </div>
  );
}

export default Playlist;
