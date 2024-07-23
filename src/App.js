import React, { useEffect, useState } from "react";
import styles from "./styles/App.module.css";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import Spotify from "./util/Spotify";

function App() {
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [searchSongs, setSearchSongs] = useState([]);

  useEffect(() => {
    window.addEventListener("load", () => {
      Spotify.getAccessToken();
    });
  }, []);

  const handleSearch = (text) => {
    Spotify.search(text).then((result) => {
      setSearchSongs(result);
    });
  };

  const handleRemoveFromPlaylist = (song) => {
    setPlaylistSongs((prev) =>
      prev.filter((songItem) => songItem.id !== song.id)
    );
    setSearchSongs((prev) => [...prev, song]);
  };

  const handleAddToPlaylist = (song) => {
    setSearchSongs((prev) =>
      prev.filter((songItem) => songItem.id !== song.id)
    );
    setPlaylistSongs((prev) => [...prev, song]);
  };

  const handleSaveToSpotify = (name) => {
    Spotify.savePlaylistName(
      name,
      playlistSongs.map((song) => song.uri)
    );
    setPlaylistSongs([]);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.h1}>Jamming</h1>
      <SearchBar handleSearch={handleSearch} />
      <div className={styles.container}>
        <SearchResult
          className={styles.searchResult}
          songs={searchSongs}
          handleAddToPlaylist={handleAddToPlaylist}
        />
        <Playlist
          className={styles.playlist}
          songs={playlistSongs}
          handleRemoveFromPlaylist={handleRemoveFromPlaylist}
          handleSaveToSpotify={handleSaveToSpotify}
        />
      </div>
    </div>
  );
}

export default App;
