import React, { useState } from "react";
import "./App.css";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import Spotify from "./util/Spotify";

function App() {
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [searchSongs, setSearchSongs] = useState([]);

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
    <div>
      <h1>test</h1>
      <SearchBar handleSearch={handleSearch} />
      <SearchResult
        songs={searchSongs}
        handleAddToPlaylist={handleAddToPlaylist}
      />
      <Playlist
        songs={playlistSongs}
        handleRemoveFromPlaylist={handleRemoveFromPlaylist}
        handleSaveToSpotify={handleSaveToSpotify}
      />
    </div>
  );
}

export default App;
