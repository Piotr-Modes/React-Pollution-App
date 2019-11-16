export const currentDate = () => {
  const today = new Date()
  return today.toLocaleDateString('en-US')
}

export const uniqueId = () => Date.now() + Math.random()

export const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}
