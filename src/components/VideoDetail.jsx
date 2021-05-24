import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading....</div>;
  }

  const videoTitle = video.snippet.title;
  const escTitle = unescape(videoTitle);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const videoChannel = `https://www.youtube.com/channel/${video.snippet.channelId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{escTitle}</h4>
        <p>{video.snippet.description}</p>
        <p>
          Channel:{" "}
          <a href={videoChannel} target="_blank" rel="noreferrer">
            {video.snippet.channelTitle}
          </a>
        </p>
      </div>
    </div>
  );
};

export default VideoDetail;
