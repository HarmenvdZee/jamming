import React from "react";
import Track from "./Track";
import styles from "../styles/Tracklist.module.css";

function Tracklist({ songs, buttonSign, handleButtonClick }) {
  return (
    <ul className={styles.tracklist}>
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
