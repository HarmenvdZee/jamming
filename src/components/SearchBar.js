import React from "react";

function SearchBar({ handleSearch }) {
  const [text, setText] = React.useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search a song"
        value={text}
        onChange={handleTextChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
