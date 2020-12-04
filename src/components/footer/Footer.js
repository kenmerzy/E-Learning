import React from 'react'
import logo from '../../logo.svg'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.Container}>
      <p>Who We Are</p>
      <div className={styles.CompanyName}>
        <p>E-Learing Company</p>
        <img src={logo} className={styles.CompanyIcon} alt="logo" />
      </div>
      <div className={styles.Info}>
        <div className={styles.InfoDetails}>
          <img src={logo} className={styles.Icon} alt="logo" />
          <p>KenMerzy@gmail.com </p>
        </div>
        <div className={styles.InfoDetails}>
          <img src={logo} className={styles.Icon} alt="logo" />
          <p>140 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú, TPHCM </p>
        </div>
        <div className={styles.InfoDetails}>
          <img src={logo} className={styles.Icon} alt="logo" />
          <p>+84903535939 </p>
        </div>
        <div className={styles.InfoDetails}>
          <a href="https://www.facebook.com/KenMerzy" target="_blank" rel="noopener noreferrer">
            <img src={logo} className={styles.Icon} alt="logo" />
          </a>
          <a href="https://www.youtube.com/channel/UCoW6b9N5VRRTVdlpvXAl43g?view_as=subscriber" target="_blank" rel="noopener noreferrer">
            <img src={logo} className={styles.Icon} alt="logo" />
          </a>
          <a href="https://www.instagram.com/kenmerzy/" target="_blank" rel="noopener noreferrer">
            <img src={logo} className={styles.Icon} alt="logo" />
          </a>
        </div>
      </div>
      <div className={styles.BottomWaterMark}>
        <p>Đồ án tốt nghiệp 2021</p>
        <p>Website by Ngọc Long & Duy Dương </p>
      </div>
    </div>
  )
}
export default Footer
