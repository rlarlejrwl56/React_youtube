import { useCallback, useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import Video_select from './components/serch_header/video_select';
import styles from './app.module.css';
import Detail_content from './components/detail_content/detail_content';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectV, setSelectV] = useState(null);
  
  const selectVideo = (video) => {
    setSelectV(video);
  }
  const search = useCallback(query => {
    setSelectV(null);
    youtube.search(query)//
    .then(videos => setVideos(videos));
  
  },[youtube]);
  useEffect(()=>{
   youtube.mostPopular()//
   .then(videos => setVideos(videos));
  },[youtube]);
  return (  
    <div className={styles.app}>
  <Video_select onSerach={search}/>
  <section className={styles.content}>
 
{ selectV && (
  <div className={styles.detail}>
<Detail_content video={selectV}/>
</div>)}
<div className={styles.list}>
<VideoList videos={videos} onVideoClick={selectVideo} display={selectV ? 'list' : 'grid'}/>
</div>
  </section>
  </div>
  )
  
}

export default App;
