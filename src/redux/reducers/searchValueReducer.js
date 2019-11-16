import { UPDATE_SEARCH_VALUE } from '../actions/types'
import { capitalize } from '../../helperFunctions'

export default (state = '', action) => {
  switch (action.type) {
    default:
      return state
    case UPDATE_SEARCH_VALUE:
      return capitalize(action.payload)
  }
}
