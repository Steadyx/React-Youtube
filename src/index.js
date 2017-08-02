import React, {
	Component
} from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';
import '../styles/styles.css';

// Smart Components
import SearchBar from './components/smart-components/search-bar'
// Dumb Components
import Navigation from './components/dumb-components/navigation';
import VideoList from './components/dumb-components/video-list';
// DATA API KEY
const API_KEY = 'AIzaSyA3u5LxhyRspE1nLe3UCAl5F1VTKI9jxD8';
const rootURl = 'https://www.googleapis.com/youtube/v3/search/';

class App extends Component {
	constructor( props ) {
		super( props )

		this.state = {
			videos: [],
			selectedVideo: null,
		}

		this.searchVidoes = this.searchVidoes.bind( this );
	}

	searchVidoes( term ) {
		axios.get( rootURl, {
			params: {
				part: 'snippet',
				key: API_KEY,
				q: term,
				type: 'video',
				maxResults: 12
			}
		} ).then( response => {
			if ( term.length == 0 ) response.data.items = []
			this.setState( {
				videos: response.data.items,
				selectedVideo: response.data.items[ 0 ]
			} )
		} ).catch( error => {
			console.log( error );
		} )
	}

	render() {
		return (
			<div>
				<Navigation/>
				<SearchBar onSearchTermChange={this.searchVidoes}/>
        <VideoList videos={this.state.videos} />
			</div>
		)
	}
}

const mountNode = document.getElementById( 'container' )
reactDOM.render(
	<App/>, mountNode )
