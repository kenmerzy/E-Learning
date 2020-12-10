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
      description: 'Với niềm đam mê Công nghệ thông tin anh đã khởi nghiệp từ khi còn rất trẻ. Sau bao nhiêu nỗ lực và cố gắng, năm 20 tuổi anh sở hữu 2 công ty với tổng tài sản lên đến 5 tỷ USD.',
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
    <div className={styles.Container}>
      <p>Who We Are</p>
      <div className={styles.CompanyName}>
        <p>E-Learing Company</p>
        <img src={Logo} className={styles.CompanyIcon} alt="logo" />
      </div>
      <div className={styles.CoverInfoAndMembers}>
        <div className={styles.Info}>
          <div className={styles.InfoDetails}>
            <img src={gmail} className={styles.Icon} alt="logo" />
            <p>KenMerzy@gmail.com </p>
          </div>
          <div className={styles.InfoDetails}>
            <img src={address} className={styles.Icon} alt="logo" />
            <p>140 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú, TPHCM </p>
          </div>
          <div className={styles.InfoDetails}>
            <img src={phone} className={styles.Icon} alt="logo" />
            <p>+84903535939 </p>
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
        </div>
        <div className={styles.Members}>
          <ul>
            {members.map((item) => <li key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} className={styles.image} alt="logo" />
              </a>
              <p className={styles.name}>{item.name}</p>
              <p>{item.position}</p>
              <p className={styles.description}>{item.description}</p>
            </li>)}
          </ul>
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
