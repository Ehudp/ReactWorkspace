import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyBxGECJhXRriXVGMkX9pXpBNNNFLjXox8A";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch(
      {
        key: API_KEY,
        term: "surfboards"
      },
      (videos)=> {
        this.setState({ videos });
      });
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

//take this components generated html
//and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector(".container"));
