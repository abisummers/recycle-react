import React from "react";

function HomePage(props) {
  const { currentUser } = props;
  return (
    <section>
      <h2>Home</h2>
      {currentUser && <p>Hi, {currentUser.fullName}</p>}
    </section>
  );
}

export default HomePage;
