import React from 'react';

export default class SearchResults extends React.Component {
  
  render() {
    return (
      <ul>
        {this.props.results.map((result, i) => 
            <li key={i}>{result}</li>)}
      </ul>
    );
  }
}