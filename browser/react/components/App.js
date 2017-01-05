import React, {Component} from 'react';
import SearchFormContainer from '../containers/SearchFormContainer'
import SearchResultsContainer from '../containers/SearchResultsContainer'

const App = (props) => {
  return (
    <div>
      <SearchFormContainer />
      <SearchResultsContainer />
        <div className="col-xs-12" style={{marginTop: 50, marginBottom: 70}}>
          {
            props.children && React.cloneElement(props.children, props)
          }
        </div>

    </div>

  );
}

export default App;
