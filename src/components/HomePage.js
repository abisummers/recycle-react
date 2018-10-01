import React from "react";
import { Link } from "react-router-dom";

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
        <form>
          <label>
            <input type="text" placeholder="Search here..." />
          </label>
          <button>Search</button>
        </form>
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
