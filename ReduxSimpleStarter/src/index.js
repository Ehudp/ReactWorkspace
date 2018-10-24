import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideDetail from './components/video_detail';

const API_KEY = "AIzaSyBxGECJhXRriXVGMkX9pXpBNNNFLjXox8A";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');

  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChanged={(term)=>this.videoSearch(term)} />
        <VideDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => { this.setState({ selectedVideo }) }}
          videos={this.state.videos} />

      </div>
    );
  }
}

//take this components generated html
//and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector(".container"));
