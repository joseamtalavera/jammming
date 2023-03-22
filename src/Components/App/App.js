import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      SearchResults: [
        {
          name: 'name1 1',
          artist: 'artist 1',
          album: 'album 1',
          id: 1
        },
        {
          name: 'name1 2',
          artist: 'artist 2',
          album: 'album 2',
          id: 2
        },
        {
          name: 'name1 3',
          artist: 'artist 3',
          album: 'album 3',
          id: 3
        }
      ]
    };
  }


  render() {

    return (
 <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar /> 
    <div className="App-playlist">
      <SearchResults SearchResults={this.state.SearchResults} />
      <Playlist />
    </div>
  </div>
</div>
  );
}
}

export default App;
