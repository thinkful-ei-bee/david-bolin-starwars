import React from 'react';
import './App.css';
import apisearch from './apisearch';
import checkArrays from './checkArrays';
import SearchResults from './SearchResults';

class App extends React.Component {
  
  state = {
    searchTerm: 'Skywalker',
    searchType: 'people',
    searchResults: [],
    searching: true,
    error: false,
    errorMessage: ''
  };

  componentDidMount() {
    if (this.state.searching) {
      //make sure results match from api
      apisearch(this.state.searchType, this.state.searchTerm)
        .then(res => {
          if (!checkArrays(res, this.state.searchResults)) {
            this.setState({
              searching: false,
              searchResults: res,
              error: false
            });
          }})
        .catch(e => {
          this.setState({
            searching: false,
            error: true,
            errorMessage: e.message,
            searchResults: []
          });
        });
    }
  }
        
  updateInputBox = (str) => {
    this.setState({
      searchTerm: str
    });
  };

  render() {
    return (
      <main className='App'>
        <h1>Star Wars Search</h1>
        <form>
          <label htmlFor="searchBox">Name Search:</label>
          <input type="text" id="searchBox" className="searchTerm" value={this.state.searchTerm} onChange={e => this.updateInputBox(e.target.value)}/>
        </form>
        <SearchResults results={this.state.searchResults} />
      </main>
    );
  }
}
  
export default App;