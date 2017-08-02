import React, { Component } from 'react';
import VideoListItem from './video-list-item';
const VideoList = props => {


	const videosMap = props.videos.map( video => {
		return (
			<VideoListItem onVideoSelect={props.onVideoSelect} video={video} key={video.etag} reactKey={video.etag}/>
		)
	} );
	return (
		<div className="cols">
      {videosMap}
    </div>
	)
}

export default VideoList;
