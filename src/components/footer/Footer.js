/* eslint-disable max-len */
import React from 'react'

import styles from './Footer.module.scss'
import DuyDuong from '../../assets/images/DuyDuong.jpg'
import NgocLong from '../../assets/images/NgocLong.jpg'
import Logo from '../../assets/images/Logo.svg'
import facebook from '../../assets/images/facebook.png'
import youtube from '../../assets/images/youtube.png'
import instagram from '../../assets/images/instagram.png'
import phone from '../../assets/images/phone.png'
import address from '../../assets/images/address.png'
import gmail from '../../assets/images/gmail.png'

const Footer = () => {
  const members = [
    {
      id: 1,
      name: 'Nguyễn Ngọc Long',
      image: NgocLong,
      position: 'Chủ tịch hội đồng quản trị',
      link: 'https://www.facebook.com/KenMerzy',
      description: 'Bắt đầu học CNTT từ năm 15 tuổi. Có niềm đam mê và hứng thú với công nghệ. Thích khám phá và tìm hiểu những thứ mới mẻ.',
    },
    {
      id: 2,
      name: 'Vũ Duy Dương',
      image: DuyDuong,
      position: 'Giám đốc điều hành',
      link: 'https://www.facebook.com/duyduong.vuhoang.1/',
      description: 'Hoạt động trong lĩnh vực công nghệ thông tin hơn 6 năm. Anh đã điều hành rất nhiều công ty lớn và biến những công ty đó trở thành những công ty nổi tiếng nhất thế giới. Anh cũng lọt top 10 người có tầm ảnh hưởng nhất Việt Nam năm 2020.',
    },
  ]
  return (
    <div className="container">
      <div className={styles.Container}>
        <div className={styles.CompanyName}>
          <p>E-Learning Company</p>
          <img src={Logo} className={styles.CompanyIcon} alt="logo" />
        </div>
        <div className="row">
          <div className={styles.InfoDetails}>
            <img src={address} className={styles.Icon} alt="logo" />
            <p>140 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú, TP. Hồ Chí Minh </p>
          </div>
        </div>
        <div className="row">
          <div className={styles.InfoDetails}>
            <img src={gmail} className={styles.Icon} alt="logo" />
            <p>KenMerzy@gmail.com</p>
          </div>
        </div>
        <div className="row">
          <div className={styles.InfoDetails}>
            <img src={phone} className={styles.Icon} alt="logo" />
            <p>+84583535939 </p>
          </div>
        </div>

        <div className={styles.InfoDetails}>
          <a href="https://www.facebook.com/KenMerzy" target="_blank" rel="noopener noreferrer">
            <img src={facebook} className={styles.Icon} alt="logo" />
          </a>
          <a href="https://www.youtube.com/channel/UCoW6b9N5VRRTVdlpvXAl43g?view_as=subscriber" target="_blank" rel="noopener noreferrer">
            <img src={youtube} className={styles.Icon} alt="logo" />
          </a>
          <a href="https://www.instagram.com/kenmerzy/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} className={styles.Icon} alt="logo" />
          </a>
        </div>
        <div className={styles.whoWeAre}>
          <p>Who We Are</p>
        </div>
        <div className="row">
          <div
            className="col-lg-5"
            style={{
              width: 360,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              padding: 40,
              borderRadius: 30,
              marginTop: 30,
            }}
          >
            <a href={members[0].link} target="_blank" rel="noopener noreferrer">
              <img src={members[0].image} className={styles.image} alt="logo" />
            </a>
            <p className={styles.name}>{members[0].name}</p>
            <p className={styles.position}>{members[0].position}</p>
            <p className={styles.description}>{members[0].description}</p>
          </div>
          <div
            className="col-lg-2"
          />
          <div
            className="col-lg-5"
            style={{
              width: 360,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              padding: 40,
              borderRadius: 30,
              marginTop: 30,

            }}
          >
            <a href={members[1].link} target="_blank" rel="noopener noreferrer">
              <img src={members[1].image} className={styles.image} alt="logo" />
            </a>
            <p className={styles.name}>{members[1].name}</p>
            <p className={styles.position}>{members[1].position}</p>
            <p className={styles.description}>{members[1].description}</p>
          </div>
        </div>
        <div className={styles.BottomWaterMark}>
          <p>Đồ án tốt nghiệp 2021</p>
          <p>Website by Ngọc Long & Duy Dương </p>
        </div>
      </div>
    </div>
  )
}
export default Footer
