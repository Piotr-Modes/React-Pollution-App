export const addZ = n =>  n < 10 ? '0' + n : '' + n

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
