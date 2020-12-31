import React from 'react'
import styles from './ModalComponent.module.scss'
import deleteIcon from '../../../assets/images/delete.svg'

const ModalComponent = (props) => {
  const { handleModalComponentCloseClick, textModal } = props
  return (
    <div className={styles.container}>
      <div className={styles.coverT}>
        <p className={styles.title}>{textModal}</p>
        <button
          className={styles.buttonClose}
          onClick={handleModalComponentCloseClick}
          type="button"
        >
          <img
            src={deleteIcon}
            alt="logo"
          />
        </button>
      </div>
    </div>
  )
}
export default ModalComponent
