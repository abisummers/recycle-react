import React from "react";
import SearchResult from "./SearchResult";
import { Redirect } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      isSubmitSuccess: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { handleEvent } = this.props;
    handleEvent(this.state.inputValue);
    this.setState({ isSubmitSuccess: true });
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ inputValue: value });
  }

  render() {
    if (this.state.isSubmitSuccess === true) {
      return <Redirect to={"/search-result"}/>
    }
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
          <input
            type="text"
            name="search"
            placeholder="Que voulez-vous recycler ?"
            value={this.state.inputValue}
            onChange={event => this.handleChange(event)}
          />
        </label>
        <button>Search</button>
      </form>
    );
  }
}

export default SearchBar;
