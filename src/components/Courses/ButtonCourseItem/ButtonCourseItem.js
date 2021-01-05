import React from 'react'
import styles from './ButtonCourseItem.module.scss'

const ButtonCourseItem = (props) => {
  const { type, onClick } = props

  const ButtonTypeCase = () => {
    switch (type) {
      case 'addToCart':
        return <div className={styles.container}>
          <button
            className={styles.buttonAddToCart}
            onClick={onClick}
            type="button"
          >
            Add to cart
          </button>
          <button
            className={styles.buttonBuyNow}
            onClick={onClick}
            type="button"
          >
            Purchase
          </button>
        </div>

      case 'learnNow':
        return <div className={styles.container}>
          <button
            className={styles.buttonBuyNow}
            onClick={onClick}
            type="button"
          >
            Learn now
          </button>
        </div>

      case 'extend':
        return <div className={styles.container}>
          <button
            className={styles.buttonAddToCart}
            onClick={onClick}
            type="button"
          >
            Extend
          </button>
        </div>
      default:
        return <div className={styles.container}>
          <button
            className={styles.buttonAddToCart}
            onClick={onClick}
            type="button"
          >
            Add to cart
          </button>
          <button
            className={styles.buttonAddToCart}
            onClick={onClick}
            type="button"
          >
            Purchase
          </button>
        </div>
    }
  }

  return (
    <ButtonTypeCase />

  )
}
export default ButtonCourseItem
