// Action Creators
import OPENAQ from '../../apis/OPENAQ'
import WIKIPEDIA from '../../apis/WIKIPEDIA'
import {
  UPDATE_SEARCH_VALUE,
  FETCH_CITY_DETAILS_REQUESTED,
  FETCH_CITY_DETAILS_SUCCESS,
  FETCH_CITY_DETAILS_FAILED,
  FETCH_LATEST_POLLUTION_MEASURMENTS_REQUESTED,
  FETCH_LATEST_POLLUTION_MEASURMENTS_SUCCESS,
  FETCH_LATEST_POLLUTION_MEASURMENTS_FAILED,
  FETCH_WIKIPEDIA_PAGE_IDS_REQUESTED,
  FETCH_WIKIPEDIA_PAGE_IDS_SUCCESS,
  FETCH_WIKIPEDIA_PAGE_IDS_FAILED,
  SAVE_SEARCH_VALUE_TO_LOCAL_STORAGE,
  LOAD_SEARCH_VALUE_FROM_LOCAL_STORAGE,
  SAVE_CITY_DETAILS_TO_LOCAL_STORAGE,
  LOAD_CITY_DETAILS_FROM_LOCAL_STORAGE,
} from './types'

export const updateSearchValue = value => {
  return {
    type: UPDATE_SEARCH_VALUE,
    payload: value,
  }
}

export const fetchCityDetailsRequested = data => {
  return {
    type: FETCH_CITY_DETAILS_REQUESTED,
    payload: data,
  }
}

export const fetchCityDetailsSuccess = ({ data, cityName }) => {
  return {
    type: FETCH_CITY_DETAILS_SUCCESS,
    payload: { cityDetails: Object.values(data.data.query.pages)[0].extract, cityName },
  }
}

export const fetchCityDetailsFailed = data => {
  return {
    type: FETCH_CITY_DETAILS_FAILED,
    payload: data,
  }
}

export const fetchWikipediaPageIdsRequested = data => {
  return {
    type: FETCH_WIKIPEDIA_PAGE_IDS_REQUESTED,
    payload: data.data.query.search[0].pageid,
  }
}

export const fetchWikipediaPageIdsSuccess = data => {
  return {
    type: FETCH_WIKIPEDIA_PAGE_IDS_SUCCESS,
    payload: data.data.query.search[0].pageid,
  }
}

export const fetchWikipediaPageIdsFailed = data => {
  return {
    type: FETCH_WIKIPEDIA_PAGE_IDS_FAILED,
    payload: data.data.query.search[0].pageid,
  }
}

export const fetchCityDetails = (pageId, cityName) => async dispatch => {
  dispatch(fetchCityDetailsRequested({}))
  try {
    const wikipediaResponse = await WIKIPEDIA.getCityDescriptionForGivenWikipediaPageId(pageId)
    dispatch(fetchCityDetailsSuccess({ data: wikipediaResponse, cityName }))
  } catch (err) {
    dispatch(fetchCityDetailsFailed({}))
  }
}

export const fetchWikipediaPageIds = (cityName, countryName) => async dispatch => {
  try {
    const listOfWikipediaPages = await WIKIPEDIA.getListOfWikipediaPagesForGivenCityAndCountry(
      cityName,
      countryName,
    )
    dispatch(fetchWikipediaPageIdsSuccess(listOfWikipediaPages))
  } catch (err) {
    console.log(err)
    // dispatch(fetchWikipediaPageIdsFailed({}))
  }
}

export const getCityDetails = (cityName, countryName) => (dispatch, getState) => {
  return dispatch(fetchWikipediaPageIds(cityName, countryName)).then(() => {
    const pageId = getState().cityDetails.currentlyFetchedPageId

    return dispatch(fetchCityDetails(pageId, cityName))
  })
}

export const fetchLatestPollutionMeasurmentsRequested = data => {
  return {
    type: FETCH_LATEST_POLLUTION_MEASURMENTS_REQUESTED,
    payload: data,
  }
}

export const fetchLatestPollutionMeasurmentsSuccess = data => {
  return {
    type: FETCH_LATEST_POLLUTION_MEASURMENTS_SUCCESS,
    payload: data,
  }
}

export const fetchLatestPollutionMeasurmentsFailed = data => {
  return {
    type: FETCH_LATEST_POLLUTION_MEASURMENTS_FAILED,
    payload: data,
  }
}

export const fetchLatestPollutionMeasurments = countryName => async dispatch => {
  dispatch(fetchLatestPollutionMeasurmentsRequested({}))
  try {
    const response = await OPENAQ.getLatestPullutionDataForGivenCountry(countryName)
    dispatch(fetchLatestPollutionMeasurmentsSuccess({ response: response.data }))
  } catch (err) {
    dispatch(fetchLatestPollutionMeasurmentsFailed({}))
  }
}

export const saveSearchValueToLocalStorage = () => {
  return {
    type: SAVE_SEARCH_VALUE_TO_LOCAL_STORAGE,
  }
}

export const loadSearchValueFromLocalStorage = searchValue => {
  return {
    type: LOAD_SEARCH_VALUE_FROM_LOCAL_STORAGE,
    payload: searchValue,
  }
}

export const saveCityDetailsToLocalStorage = () => {
  return {
    type: SAVE_CITY_DETAILS_TO_LOCAL_STORAGE,
  }
}

export const loadCityDetailsFromLocalStorage = cityDetails => {
  return {
    type: LOAD_CITY_DETAILS_FROM_LOCAL_STORAGE,
    payload: cityDetails,
  }
}

export const savePollutionAppDataToLocalStorage = () => async dispatch => {
  await dispatch(saveSearchValueToLocalStorage())
  dispatch(saveCityDetailsToLocalStorage())
}

export const loadPollutionAppDataFromLocalStorage = data => dispatch => {
  dispatch(loadSearchValueFromLocalStorage(data.searchValue))
  dispatch(loadCityDetailsFromLocalStorage(data.cityDetails))
}

export const setPollutionAppDataInitialStateToLocalStorage = () => {
  const initialState = {
    searchValue: '',
    cityDetails: {},
  }
  localStorage.setItem('pollutionAppData', JSON.stringify(initialState))
}

export const checkForPullutionAppDataInLocalStorage = () => async dispatch => {
  try {
    const response = await JSON.parse(localStorage.getItem('pollutionAppData'))
    if (response) dispatch(loadPollutionAppDataFromLocalStorage(response))
    if (!response) dispatch(setPollutionAppDataInitialStateToLocalStorage())
  } catch (err) {
    console.log(err)
  }
}
