import dayjs from 'dayjs'
export const formatDate = (date: Date, format: string = 'hh:mm') => {
  return dayjs(date).format(format)
}

export const checkIsMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
