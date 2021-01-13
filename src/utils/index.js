import background1 from '../assets/images/background1.svg'
import background3 from '../assets/images/background3.svg'
import background4 from '../assets/images/background4.svg'
import background5 from '../assets/images/background5.svg'
import background6 from '../assets/images/background6.svg'
import background7 from '../assets/images/background7.svg'
import background8 from '../assets/images/background8.svg'
import background9 from '../assets/images/background9.svg'
import background10 from '../assets/images/background10.svg'
import background11 from '../assets/images/background11.svg'
import background12 from '../assets/images/background12.svg'
import background13 from '../assets/images/background13.svg'
import background14 from '../assets/images/background14.svg'

export const ParseTimeToMinuteAndSecond = ({ hours, minute, seconds }) => {
  if (hours > 0) {
    return `${minute + hours * 60} : ${seconds} `
  }
  return `${minute} : ${seconds} `
}
export const GetHourOfTime = ({ hours, minute }) => {
  if (hours > 0) {
    return `${hours} : ${minute}`
  }
  return `${minute} `
}
export const truncateString = (input, l) => {
  if (input.length > l) {
    return `${input.substring(0, l)}...`
  }
  return input
}
export const shuffleArray = (a) => {
  let j; let x; let
    i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}
export const randomBackground = () => {
  const arrBackground = {
    0: background14,
    1: background1,
    2: background3,
    3: background4,
    4: background5,
    5: background6,
    6: background7,
    7: background8,
    8: background9,
    9: background10,
    10: background11,
    11: background12,
    12: background13,

  }
  const rd = Math.floor(Math.random() * 13)
  console.log('===============================================')
  console.log('rd', rd)
  console.log('===============================================')
  return arrBackground[rd]
}
