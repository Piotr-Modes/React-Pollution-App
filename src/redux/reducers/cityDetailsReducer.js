import {
  FETCH_CITY_DETAILS_REQUESTED,
  FETCH_CITY_DETAILS_SUCCESS,
  FETCH_CITY_DETAILS_FAILED,
  FETCH_WIKIPEDIA_PAGE_IDS_REQUESTED,
  FETCH_WIKIPEDIA_PAGE_IDS_SUCCESS,
  FETCH_WIKIPEDIA_PAGE_IDS_FAILED,
} from '../actions/types'

const initialState = {
  list: {},
  currentlyFetchedPageId: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state

    case FETCH_WIKIPEDIA_PAGE_IDS_REQUESTED:
      return {
        ...state,
      }
    case FETCH_WIKIPEDIA_PAGE_IDS_SUCCESS:
      return {
        ...state,
        currentlyFetchedPageId: action.payload,
      }
    case FETCH_WIKIPEDIA_PAGE_IDS_FAILED:
      return {
        ...state,
      }
    case FETCH_CITY_DETAILS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_CITY_DETAILS_SUCCESS:
      return {
        ...state,
        list: { ...state.list, [action.payload.cityName]: action.payload.cityDetails },
        isLoading: false,
      }
    case FETCH_CITY_DETAILS_FAILED:
      return {
        ...state,
        isLoading: false,
      }
  }
}
