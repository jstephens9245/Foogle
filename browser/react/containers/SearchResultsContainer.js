import React, {Component} from 'react';
import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.search.pages,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const SearchResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);

export default SearchResultsContainer;
