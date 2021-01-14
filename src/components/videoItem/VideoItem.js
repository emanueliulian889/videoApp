import React from "react";
import classes from './videoItem.module.scss';

const VideoItem = ({video, onVideoSelect}) => {
    // console.log('=== videoItem page ===', onVideoSelect)
    return (
        <div className={`${classes.videoItem} item`} onClick={() => onVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} className="ui image" alt={video.snippet.title} />
            <div className="content">
                <span className='header'>{video.snippet.title}</span>
            </div>
        </div>
    )
}

export default VideoItem;