import axios from 'axios'

const baseUrl = 'https://en.wikipedia.org/w/api.php'

const getListOfWikipediaPagesForGivenCityAndCountry = (cityName, countryName) => {
  return axios.get(`${baseUrl}?action=query&list=search&format=json&srsearch=${cityName}+${countryName}+city&origin=*`)
}

const getCityDescriptionForGivenWikipediaPageId = pageId => {
  return axios.get(`${baseUrl}?action=query&pageids=${pageId}&format=json&prop=extracts&exintro&origin=*`)
}

export default {
  getListOfWikipediaPagesForGivenCityAndCountry,
  getCityDescriptionForGivenWikipediaPageId
}
