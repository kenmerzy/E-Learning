/* eslint-disable react/jsx-indent-props */
import React from 'react'
import styles from './ProfileItem.module.scss'

const ProfileItem = (props) => {
  const {
    image, placeholder, value, onChange, type,
  } = props
  return (
    <div className={styles.divInput}>
      <div className={styles.coverImage}>
        <img
          src={image}
          alt="logo"
        />
      </div>
      {type === 'input'
        ? <form
          form
          className={styles.formInput}
          onSubmit={(e) => { e.preventDefault() }}
        >
          <input
            className={styles.input}
            placeholder={placeholder}
            formNoValidate
            value={value}
            onChange={onChange}
          />
        </form>
        : <div className={styles.formInput}><p>{value}</p></div>}
    </div>

  )
}
export default ProfileItem
