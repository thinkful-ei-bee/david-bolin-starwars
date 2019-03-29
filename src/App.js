import React from 'react';

class App extends React.Component {
  
  render() {
    return (
      <main className='App'>
        <h1>Star Wars Search</h1>
        <form>
          <label htmlFor="searchBox">Name:</label>
          <input id="searchBox" className="searchTerm"></input>
        </form>
      </main>
    );
  }
}
  
export default App;