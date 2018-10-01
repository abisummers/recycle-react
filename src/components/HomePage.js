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
        <Link to="/material/plastiques">PLASTIC</Link>

        <Link to="/material/dechets-electriques-et-electroniques">
          ELECTRONICS
        </Link>

        <Link to="/material/dechets-de-cuisine">COMPOST</Link>
      </div>

      <div className="row">
        <Link to="/material/verre">GLASS</Link>

        <Link to="/material/papiers-cartons">PAPER</Link>

        <Link to="/all-categories">SEE ALL </Link>
      </div>
    </section>
  );
}

export default HomePage;
