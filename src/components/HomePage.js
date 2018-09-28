import React from "react";

function HomePage(props) {
  const { currentUser } = props;
  return (
    <section>
      <h1>Home</h1>
      {currentUser && <p>Hi, {currentUser.fullName}</p>}
    </section>
  );
}

export default HomePage;
