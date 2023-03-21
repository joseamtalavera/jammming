
import './App.css';
import {SearchBar} from './SearchBar/'
import {SearchResults} from './SearchResults'
import {Playlist} from './Playlist'

function App() {
  return (
 <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div class="App-playlist">
      <SearchResults />
      <Playlist />
    </div>
  </div>
</div>
  );
}

export default App;
