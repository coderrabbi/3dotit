import React from 'react';
import styles from '../../../styles/loader.module.css';
const Loader = () => {
    return (
        <div className="flex justify-center items-center flex-col py-20 h-screen bg-transparent">
            <div className={styles.wrapper}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
            </div>
            <div className={styles.spinner}>
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </div>
        </div>
    );
};

export default Loader;
