import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Offline } from 'react-detect-offline'
import {
  updateSearchValue,
  fetchLatestPollutionMeasurments,
  getCityDetails,
  checkForPullutionAppDataInLocalStorage,
  savePollutionAppDataToLocalStorage,
} from '../redux/actions'

import SearchForm from './SearchForm'
import Accordion from './Accordion'
import List from './utylities/List'
import OfflineMessage from './utylities/OfflineMessage'
import ErrorMessage from './utylities/ErrorMessage'
import withLoading from './utylities/withLoading'

import { getObjectKeyByValue } from '../helperFunctions'

const ListWithLoading = withLoading(List)

const App = props => {
  const allowedCountries = {
    Poland: 'PL',
    Germany: 'DE',
    Spain: 'ES',
    France: 'FR',
  }

  useEffect(() => {
    props.checkForPullutionAppDataInLocalStorage()
  }, [])

  useEffect(() => {
    console.log(props.searchValue)
    props.savePollutionAppDataToLocalStorage()
  }, [props.searchValue, props.cityDetails])

  const renderTenMostPullutedCities = (cityObj, index) => {
    return (
      <Accordion
        key={index}
        listNumber={index + 1}
        pm25Value={cityObj.value}
        getCityDetails={() =>
          props.cityDetails[cityObj.city]
            ? null
            : props.getCityDetails(
                cityObj.city,
                getObjectKeyByValue(allowedCountries, cityObj.country),
              )
        }
        title={cityObj.city}
        content={props.cityDetails[cityObj.city]}
      />
    )
  }
  return (
    <div className="app">
      <Offline>
        <OfflineMessage />
      </Offline>
      <SearchForm
        isLoading={props.isLoading}
        searchValue={props.searchValue}
        allowedCountries={allowedCountries}
        updateSearchValue={props.updateSearchValue}
        fetchLatestPollutionMeasurments={props.fetchLatestPollutionMeasurments}
      />
      <ErrorMessage errorMessage={props.errorMessage} />
      <ListWithLoading
        isLoading={props.isLoading}
        list={props.tenMostPullutedCitiesInGivenCountry}
        listRenderer={renderTenMostPullutedCities}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    searchValue: state.searchValue,
    isLoading: state.latestPollutionMeasurments.isLoading,
    tenMostPullutedCitiesInGivenCountry:
      state.latestPollutionMeasurments.tenMostPullutedCitiesInGivenCountry,
    errorMessage: state.latestPollutionMeasurments.errorMessage,
    cityDetails: state.cityDetails.list,
  }
}

export default connect(mapStateToProps, {
  updateSearchValue,
  fetchLatestPollutionMeasurments,
  getCityDetails,
  checkForPullutionAppDataInLocalStorage,
  savePollutionAppDataToLocalStorage,
})(App)
