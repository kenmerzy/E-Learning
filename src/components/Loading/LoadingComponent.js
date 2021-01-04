/* eslint-disable no-unused-vars */
import React from 'react'

import ReactLoading from 'react-loading'

import styles from './LoadingComponent.module.scss'

const LoadingComponent = ({ label }) => (
  <div className={styles.container}>
    <ReactLoading type="spinningBubbles" color="#fff" />
    <p>{label}</p>
  </div>
)
export default LoadingComponent
