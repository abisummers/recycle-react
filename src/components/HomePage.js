import React from "react";

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
        <button>PLASTIC</button>

        <button>ELECTRONICS</button>

        <button>COMPOST</button>
      </div>

      <div className="row">
        <button>GLASS</button>

        <button>PAPER</button>

        <button>SEE ALL </button>
      </div>
    </section>
  );
}

export default HomePage;
