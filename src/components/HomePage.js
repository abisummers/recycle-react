import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import FunFact from "./FunFact";
import { Component } from "react";
import FunFacts from "../components/FunFacts";

function HomePage(props) {
  const { currentUser } = props;
  return (
    <section>
      <div className="funFact">
        <FunFact handleEvent={(facts) => props.handleEvent(facts)}/>
      </div>
      {currentUser && <p>Hi, {currentUser.fullName}</p>}

      <FunFacts />

      <div className="search-form">
        <SearchBar handleEvent={inputValue => props.handleEvent(inputValue)} />
      </div>

      <div className="row">
        <Link to="/material/plastiques" className="plastiques">
          PLASTIQUES
        </Link>

        <Link
          to="/material/dechets-electriques-et-electroniques"
          className="dechets-electriques-et-electroniques">
          ELECTRIQUES & ELECTRONIQUES
        </Link>

        <Link to="/material/dechets-de-cuisine" className="dechets-de-cuisine">
          COMPOST
        </Link>
      </div>

      <div className="row">
        <Link to="/material/verre" className="verre">
          VERRE
        </Link>

        <Link to="/material/papiers-cartons" className="papiers-cartons">
          PAPIER
        </Link>

        <Link to="/all-categories" className="toutes-categories">
          VOIR TOUTES LES CATEGORIES
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
