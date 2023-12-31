import React from "react";
import Tracklist from "./Tracklist";
import styles from "../styles/SearchResults.module.css";

function SearchResult({ songs, handleAddToPlaylist }) {
  return (
    <div className={styles.searchResult}>
      <h2 className={styles.h2}>Search Results</h2>
      <Tracklist
        songs={songs}
        buttonSign="+"
        handleButtonClick={handleAddToPlaylist}
      />
    </div>
  );
}

export default SearchResult;
