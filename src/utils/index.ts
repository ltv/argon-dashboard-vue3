import dayjs from 'dayjs'
export const formatDate = (date: Date, format: string = 'hh:mm') => {
  return dayjs(date).format(format)
}
