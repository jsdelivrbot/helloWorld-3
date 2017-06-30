import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { API_KEY } from './api_key';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch(
      { key: API_KEY, term: 'surfboards' },
      videos => this.setState({ videos })
    );
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
