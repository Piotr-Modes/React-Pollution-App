import {
  UPDATE_SEARCH_VALUE,
  SAVE_SEARCH_VALUE_TO_LOCAL_STORAGE,
  LOAD_SEARCH_VALUE_FROM_LOCAL_STORAGE,
} from '../actions/types'
import { updatePollutionAppDataInLocalStorage, capitalize } from '../../helperFunctions'

export default (state = '', action) => {
  switch (action.type) {
    default:
      return state
    case UPDATE_SEARCH_VALUE:
      return capitalize(action.payload)
    case SAVE_SEARCH_VALUE_TO_LOCAL_STORAGE:
      updatePollutionAppDataInLocalStorage('searchValue', state)
      return state
    case LOAD_SEARCH_VALUE_FROM_LOCAL_STORAGE:
      return action.payload
  }
}
