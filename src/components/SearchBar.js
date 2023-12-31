import React from "react";
import styles from "../styles/SearchBar.module.css";

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.textField}
        type="text"
        placeholder="Search a song"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Search" className={styles.button} />
    </form>
  );
}

export default SearchBar;
