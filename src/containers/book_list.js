import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li
        key={book.title}
        className='list-group-item'>{book.title}</li>
    ));
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => ({ books });
const mapDispatchToProps = dispatch => (
  bindActionCreators({ selectBook }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
