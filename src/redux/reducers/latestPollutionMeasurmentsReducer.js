 import {} from '../actions/types'
  
  const initialState = {
      latestPullutionMeasurmentsInGivenCountry: [],
      tenMostPullutedCitiesInGivenCountry: [],
      isLoading:false,
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      default:
        return state
       
    }
  }
  