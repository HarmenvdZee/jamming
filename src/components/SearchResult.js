import React from "react";
import Tracklist from "./Tracklist";

function SearchResult({ songs, handleAddToPlaylist }) {
  return (
    <>
      <h2>Search Results</h2>
      <Tracklist
        songs={songs}
        buttonSign="+"
        handleButtonClick={handleAddToPlaylist}
      />
    </>
  );
}

export default SearchResult;
