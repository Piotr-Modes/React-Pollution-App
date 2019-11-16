import {
  FETCH_LATEST_POLLUTION_MEASURMENTS_REQUESTED,
  FETCH_LATEST_POLLUTION_MEASURMENTS_SUCCESS,
  FETCH_LATEST_POLLUTION_MEASURMENTS_FAILED,
} from '../actions/types'

const initialState = {
  latestPullutionMeasurmentsInGivenCountry: [],
  tenMostPullutedCitiesInGivenCountry: [],
  isLoading: false,
  errorMessage: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
    case FETCH_LATEST_POLLUTION_MEASURMENTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    case FETCH_LATEST_POLLUTION_MEASURMENTS_SUCCESS:
      return {
        ...state,
        latestPullutionMeasurmentsInGivenCountry: action.payload['response'].results,
        tenMostPullutedCitiesInGivenCountry: action.payload['response'].results
          .sort((a, b) => (a.value > b.value ? -1 : 1))
          .reduce((acc, obj) => (acc.find(x => x.city === obj.city) ? acc : [...acc, obj]), [])
          .slice(0, 10),
        isLoading: false,
      }
    case FETCH_LATEST_POLLUTION_MEASURMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      }
  }
}
