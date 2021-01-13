import React from 'react'
import styles from './ButtonCourseItem.module.scss'

const ButtonCourseItem = (props) => {
  const {
    type, onClickAddToCart, onClickBuyNow, onClickLearnNow, onClickExtend,
  } = props

  const ButtonTypeCase = () => {
    switch (type) {
      case 'addToCart':
        return <div className={styles.container}>
          <button
            className={styles.buttonAddToCart}
            onClick={onClickAddToCart}
            type="button"
          >
            Add to cart
          </button>
          <button
            className={styles.buttonBuyNow}
            onClick={onClickBuyNow}
            type="button"
          >
            Buy now
          </button>
        </div>

      case 'learnNow':
        return <div className={styles.container}>
          <button
            className={styles.buttonAddToCart}
            onClick={onClickLearnNow}
            type="button"
          >
            Learn now
          </button>
        </div>

      case 'extend':
        return <div className={styles.container}>
          <button
            className={styles.buttonAddToCart}
            onClick={onClickExtend}
            type="button"
          >
            Extend
          </button>
        </div>
      default:
        return <div className={styles.container}>
          <button
            className={styles.buttonAddToCart}
            onClick={onClickAddToCart}
            type="button"
          >
            Add to cart
          </button>
          <button
            className={styles.buttonAddToCart}
            onClick={onClickBuyNow}
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
