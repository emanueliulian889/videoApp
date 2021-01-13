import React from "react";
import VideoItem from "../videoItem/VideoItem";

const VideoList = ({ videos }) => {
    console.log(videos);

    const renderList = videos.map(video => {
        return <VideoItem
            key={video.id.videoId}
            title={video.snippet.title}
        />
    })

    return <ul>{renderList}</ul>
}

export default VideoList;