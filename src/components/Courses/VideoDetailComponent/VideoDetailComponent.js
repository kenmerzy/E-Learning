/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Player } from 'video-react'
import ReactPlayer from 'react-player'
import styles from './VideoDetailComponent.module.scss'
import deleteIcon from '../../../assets/images/delete.svg'

const VideoDetailComponent = (props) => {
  const [src, setsrc] = useState()
  const { location, handleCloseClick } = props

  useEffect(() => {
    if (location?.state?.src !== undefined) {
      setsrc(location?.state?.src)
    }
  })
  return (
    <div className={styles.container}>
      <Player
        src={src || 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'}
      />

    </div>
  )
}
export default VideoDetailComponent
