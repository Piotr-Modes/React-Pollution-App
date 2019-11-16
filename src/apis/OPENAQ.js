import axios from 'axios'

const baseUrl = 'https://api.openaq.org/v1/'

const getLatestPullutionDataForGivenCountry = countryName => {
  // return axios.get(`${baseUrl}latest?country=${countryName}&parameter=pm25`)
  return axios.get(`${baseUrl}measurements?country=${countryName}&date_from=2019-01-01&limit=150&parameter=pm25&order_by[]=value&sort=desc`)
  // return axios.get(`${baseUrl}measurements?country=${countryName}&limit=50&parameter=pm25&order_by[]=value&sort=desc`)
  // https://api.openaq.org/v1/measurements?country=ES&parameter=pm25&order_by[]=value&sort=desc
  // date_from=2019-01-01&limit=50&order_by[]=value&sort=desc
}

export default {
  getLatestPullutionDataForGivenCountry,
}
