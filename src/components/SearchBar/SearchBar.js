import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { handleEvent, history } = this.props;
    handleEvent(this.state.inputValue);
    history.push("/search-result");
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ inputValue: value });
  }

  render() {
    if (this.state.isSubmitSuccess === true) {
      return <Redirect to={"/search-result"} />
    }

    return (
      <form
        onSubmit={event => this.handleSubmit(event)}
        className="form-search"
      >
        <input
          className="input-search"
          type="text"
          name="search"
          placeholder="Que voulez-vous recycler ?"
          value={this.state.inputValue}
          onChange={event => this.handleChange(event)}
        />

        <button className="search-button">
          <i className="fa fa-search" />
        </button>
      </form>
    );
  }
}

export default SearchBar;

// export default withRouter(SearchBar);
