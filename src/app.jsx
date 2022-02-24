import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import Video_select from './components/serch_header/video_select';
import styles from './app.module.css';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube
    .search(query)//
    .then(videos => setVideos(videos));
  
  }
  useEffect(()=>{
   youtube.mostPopular()//
   .then(videos => setVideos(videos));
  },[]);
  return (  
    <div className={styles.app}>
  <Video_select onSerach={search}/>
  <VideoList videos={videos}/>
</div>
  )
  
}

export default App;
