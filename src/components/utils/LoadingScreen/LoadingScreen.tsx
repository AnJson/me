import React from 'react'
import Loader from '../Loader/Loader'

import styles from './LoadingScreen.module.css'

const LoadingScreen = () => {
  return (
    <div className={styles.wrapper}>
      <Loader />
    </div>
  )
}

export default LoadingScreen
