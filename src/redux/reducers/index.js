import { combineReducers } from 'redux'

import latestPollutionMeasurmentsReducer from './latestPollutionMeasurmentsReducer'
import cityDetailsReducer from './cityDetailsReducer'
import searchValueReducer from './searchValueReducer'

export default combineReducers({
  latestPollutionMeasurments: latestPollutionMeasurmentsReducer,
  cityDetails: cityDetailsReducer,
  searchValue: searchValueReducer,
})
