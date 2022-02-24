import React, { memo } from 'react';
import styles from "./video_item.module.css";

const VideoItem = memo(({video, video:{snippet},onVideoClick, display}) => {
    const disPlayType = display === 'list' ? styles.list : styles.grid;
    return (
   <li className={`${styles.container} ${disPlayType}`} 
   onClick={()=>onVideoClick(video)}>
        <div className={styles.video}>
        <img className={styles.thumbnail}
        src= {snippet.thumbnails.medium.url}
        alt="video thumbnail" />
    <div className={styles.metadata}>
        <p className={styles.title}>{snippet.title} </p>
        <p className={styles.channel}>{snippet.channelTitle} </p>
    </div>
        </div>
    </li>

);
}
);

export default VideoItem;