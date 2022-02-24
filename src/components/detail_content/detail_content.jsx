import React from "react";
import styles from "./video_detail.module.css";
const Detail_content = ({ video,video:{snippet} }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      title="youtube video player"
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <hr className={styles.hr}/>
    <h3>{snippet.channelTitle}</h3>
    <pre>{snippet.description}</pre>
  </section>
);

export default Detail_content;
