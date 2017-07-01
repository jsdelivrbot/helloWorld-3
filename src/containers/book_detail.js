import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    return (
      <div>Book Detail!</div>
    );
  }
}

const mapStateToProps = ({ activeBook }) => ({
  book: activeBook
});

export default connect(mapStateToProps)(BookDetail);
