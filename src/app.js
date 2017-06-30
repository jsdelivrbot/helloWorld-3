import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { API_KEY } from './api_key';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
