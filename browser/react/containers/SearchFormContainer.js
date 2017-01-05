import React, {Component} from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import {searchPages, updateSearchForm} from '../redux/action-creators/searchForm';

const mapStateToProps = (state, ownProps) => {
  return {
    searchValue: state.search.searchValue,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateSearchFormInput: (field, event) => {
      dispatch(updateSearchForm(event.target.value))
    },
    searchPages: (e, search) => {
      e.preventDefault();
      dispatch(searchPages({search: search}))
    }

  };
}

const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

export default SearchFormContainer;
