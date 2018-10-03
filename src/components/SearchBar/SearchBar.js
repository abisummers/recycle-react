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
      <form onSubmit={event => this.handleSubmit(event)} className="form-search">
        
          <input
            className="input-search"
            type="text"
            name="search"
            placeholder="Que voulez-vous recycler ?"
            value={this.state.inputValue}
            onChange={event => this.handleChange(event)}
          />
        
        <button className="search-button"><i class="fa fa-search"></i></button>
      </form>
    );
  }

}

export default SearchBar;

{/* <form class="example" action="action_page.php">
  <input type="text" placeholder="Search.." name="search">
  <button type="submit"><i class="fa fa-search"></i></button>
</form> */}
