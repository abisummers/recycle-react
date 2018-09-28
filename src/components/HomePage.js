import React from "react";

function HomePage(props) {
  const { currentUser } = props;
  return (
    <section>
      <h2>Home</h2>
      {currentUser && <p>Hi, {currentUser.fullName}</p>}

      <div className="log-sign-form">
        <form>
          <label>
            <input />
          </label>
          <button>Search</button>
        </form>
      </div>
    </section>
  );
}

export default HomePage;
