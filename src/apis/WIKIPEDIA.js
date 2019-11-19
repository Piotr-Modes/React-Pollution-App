import axios from 'axios'

const baseUrl = 'https://en.wikipedia.org/w/api.php'

const countrySpecyficQueries = {
  Germany: ['state', 'city'],
  Spain: ['Spain', 'city'],
  France: ['France', 'department'],
}

const getListOfWikipediaPagesForGivenCityAndCountry = (cityName, countryName) => {
  return axios.get(baseUrl, {
    params: {
      action: 'query',
      list: 'search',
      format:'json',
      origin: '*',
      srsearch: `${cityName}${
        countrySpecyficQueries[countryName] ? `+${countrySpecyficQueries[countryName].join('+')}` : ''}`     
    }
  })
}

const getCityDescriptionForGivenWikipediaPageId = pageId => {
  if (!pageId) return
  return axios.get(baseUrl, {
    params: {
      action: 'query',
      pageids: pageId,
      format: 'json',
      prop: 'extracts',
      exintro: '',
      origin: '*',  
    }
  })
}

export default {
  getListOfWikipediaPagesForGivenCityAndCountry,
  getCityDescriptionForGivenWikipediaPageId,
}
