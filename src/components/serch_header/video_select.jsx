import React, { memo, useRef } from 'react';
import styles from "./video_select.module.css";

const Video_select = memo(({onSerach}) => {
    const inputRef = useRef();
    const handleSerach = () =>{
        const value = inputRef.current.value;
         onSerach(value);
    }
    const onClick = () =>{
            handleSerach();
    }
    const onKeyPress = (event) => {
         if(event.key == "Enter"){
             handleSerach();
         }
    }
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
            <img className={styles.img} src="/images/logo.png" alt="logo" />
            <h1 className={styles.title}>DeokTube</h1>
            </div>
            <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress}/>
            <button className={styles.button} type="submit" onClick={onClick}>
                <img className={styles.bimg} src="/images/search.png" alt="search" />
            </button>
        </header>
    )
});
export default Video_select;