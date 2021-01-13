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
