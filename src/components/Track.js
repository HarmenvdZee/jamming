import React from "react";

function Track({ song, buttonSign, handleButtonClick }) {
  const handleClick = () => {
    handleButtonClick(song);
  };

  return (
    <li>
      <h3>{song.title}</h3>
      <p>
        {song.artist} | {song.album}
      </p>
      <button onClick={handleClick}>{buttonSign}</button>
    </li>
  );
}

export default Track;
