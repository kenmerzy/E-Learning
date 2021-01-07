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
