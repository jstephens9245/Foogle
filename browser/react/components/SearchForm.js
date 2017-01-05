import React from 'react';

const SearchForm = (props) => {
  return (
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <form onSubmit={(event) => {props.searchIt(event, props.searchValue)}}>
          <h1>Foogle</h1>
          <div className="form-group">
            <label htmlFor="exampleInputSearch1">Search</label>
            <input
              onChange={(event) => {props.updateSearchFormInput('searchValue', event)}}
              value={props.searchValue}
              type="email"
              className="form-control"
              id="exampleInputSearch1"
              aria-describedby="emailHelp"
              placeholder="Enter Search" />
          </div>
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
