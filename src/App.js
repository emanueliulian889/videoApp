import React, {Component} from "react";
import SearchBar from "./components/searchBar/searchBar";
import youTube from "./apis/youTube";
import VideoList from "./components/videoList/videoList";

class App extends Component {
    state = {
        videos: []
    }

    onTermSubmit = async term => {
        const response = await youTube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;