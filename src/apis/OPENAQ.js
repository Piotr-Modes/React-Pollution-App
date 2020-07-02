import axios from 'axios'
import { addZ } from '../helperFunctions'

const baseUrl = 'https://api.openaq.org/v1/'

const getLatestPullutionDataForGivenCountry = countryName => {
  const today = new Date()
  const date = `${today.getFullYear()}-${addZ(today.getMonth() + 1)}-01`
  return axios.get(`${baseUrl}measurements`, {
    params: {
      country: countryName,
      date_from: date,
      limit:'150',
      parameter: 'pm25',
      'order_by[]' :'value',
      sort: 'desc',
    }
  })
}

export default {
  getLatestPullutionDataForGivenCountry,
}
