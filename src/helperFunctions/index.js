export const currentDate = () => {
  const today = new Date()
  return today.toLocaleDateString('en-US')
}

export const uniqueId = () => Date.now() + Math.random()

export const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

export const getObjectKeyByValue = (object, value) =>
  Object.keys(object).find(key => object[key] === value)

export const updatePollutionAppDataInLocalStorage = async (key, data) => {
  const pollutionAppData = await JSON.parse(localStorage.getItem('pollutionAppData'))

  if (!pollutionAppData) return

  pollutionAppData[key] = data
  localStorage.setItem('pollutionAppData', JSON.stringify(pollutionAppData))
}
