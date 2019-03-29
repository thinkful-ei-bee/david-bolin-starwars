import React from 'react';

class App extends React.Component {
  
  state = {
    searchTerm: ''
  }

  updateInputBox = (str) => {
    this.setState({
      searchTerm: str
    });
  }

  render() {
    return (
      <main className='App'>
        <h1>Star Wars Search</h1>
        <form>
          <label htmlFor="searchBox">Name:</label>
          <input type="text" id="searchBox" className="searchTerm" value={this.state.searchTerm} onChange={e => this.updateInputBox(e.target.value)}/>
        </form>
      </main>
    );
  }
}
  
export default App;