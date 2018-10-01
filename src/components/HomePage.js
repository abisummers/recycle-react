import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

function HomePage(props) {
  const { currentUser } = props;
  return (
    <section>
      <div className="funFact">
        <p>A fun fact</p>
        <button>again</button>
      </div>
      {currentUser && <p>Hi, {currentUser.fullName}</p>}

      <div className="search-form">
       <SearchBar handleEvent={(inputValue)=> props.handleEvent(inputValue)}/>
      </div>

      <div className="row">
        <Link to="/" className="plastic">PLASTIC</Link>

        <Link to="/">ELECTRONICS</Link>

        <Link to="/">COMPOST</Link>
      </div>

      <div className="row">
        <Link to="/">GLASS</Link>

        <Link to="/">PAPER</Link>

        <Link to="/all-categories">SEE ALL </Link>
      </div>
    </section>
  );
}

export default HomePage;
