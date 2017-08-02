import React, { Component } from 'react';
import VideoButtons from './video-list-buttons';

const VideoListItem = ( { video, onVideoSelect } ) => {
	const vidURL = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<li onClick={()=> onVideoSelect(video)} className="inner-col">
      <a href="#" className="video-hover-top">
        <div>
          <iframe src={vidURL} frameBorder="0">
          </iframe>
        </div>
        <div className="title">
          <span>
            {video.snippet.title}
          </span>
        </div>
      </a>
      <VideoButtons/>
    </li>
	)
}


export default VideoListItem;
