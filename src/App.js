import React from 'react';
import './App.css';
import apisearch from './apisearch';
import checkArrays from './checkArrays';
import SearchResults from './SearchResults';
import ErrorMessage from './ErrorMessage';

class App extends React.Component {
  
  state = {
    searchTerm: '',
    searchType: 'people',
    searchResults: [],
    searching: false,
    error: false,
    errorMessage: ''
  };

  componentDidUpdate() {
    if (this.state.searching) {
      //make sure results match from api
      apisearch(this.state.searchType, this.state.searchTerm)
        .then(res => {
          if (!checkArrays(res, this.state.searchResults)) {
            this.setState({
              searching: false,
              searchResults: res,
              error: false,
              errorMessage: ''
            });
          } else {
            this.setState({
              searching: false,
              error: false,
              errorMessage: ''
            });
          }
        
        })
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

  submitSearch = () => {
    this.setState({
      searching: true
    });
  }
  
  updateInputBox = (str) => {
    this.setState({
      searchTerm: str
    });
  };

  render() {
    let searchingMessage;
    if (this.state.searching) {
      searchingMessage = (
        <p>Currently searching...</p>
      )}

    return (
      <main className='App'>
        <h1>Star Wars Search</h1>
        <form>
          <label htmlFor="searchBox">Name Search:</label>
          <input type="text" id="searchBox" className="searchTerm" value={this.state.searchTerm} onChange={e => this.updateInputBox(e.target.value)}/>
          <button class="search-button" onClick={(e) => {e.preventDefault(); this.submitSearch()}}>Search</button>
        </form>
        <section className="search-results">
          <ErrorMessage message={this.state.errorMessage} />
          {searchingMessage}
          <SearchResults results={this.state.searchResults} />
        </section>
        
      </main>
    );
  }
}
  
export default App;