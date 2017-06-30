import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <input
        value={this.state.term}
        onChange={this.handleInputChange}/>
    );
  }

  handleInputChange(event) {
    this.setState({ term: event.target.value });
  }
}

export default SearchBar;
