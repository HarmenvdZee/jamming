import React from "react";
import styles from "../styles/Track.module.css";

function Track({ song, buttonSign, handleButtonClick }) {
  const handleClick = () => {
    handleButtonClick(song);
  };

  return (
    <li className={styles.track}>
      <div className={styles.trackInfo}>
        <h3>{song.name}</h3>
        <p>
          {song.artist} | {song.album}
        </p>
      </div>
      <button className={styles.button} onClick={handleClick}>
        {buttonSign}
      </button>
    </li>
  );
}

export default Track;
