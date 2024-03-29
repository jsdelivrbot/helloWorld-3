import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map(video => (
    <VideoListItem
      key={video.etag}
      video={video}
      selectVideo={() => onVideoSelect(video)} />
  ));

  return (
    <ul className='video-list col-md-4 list-group'>
      {videoItems}
    </ul>
  );
};

export default VideoList;
