import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  updateSearchValue,
  fetchLatestPollutionMeasurments,
  getCityDetails,
  checkForPollutionAppDataInLocalStorage,
  savePollutionAppDataToLocalStorage,
} from '../redux/actions'

import { AppWrapper } from '../globalStyles'
import SearchForm from './SearchForm'
import Accordion from './Accordion'
import List from './utilities/List'
import OfflineMessage from './utilities/OfflineMessage'
import ErrorMessage from './utilities/ErrorMessage'
import withLoading from './utilities/withLoading'

import { getObjectKeyByValue } from '../helperFunctions'

const ListWithLoading = withLoading(List)

const App = props => {
  const [activeAccordionState, setActiveAccordionState] = useState('')

  const allowedCountries = {
    Poland: 'PL',
    Germany: 'DE',
    Spain: 'ES',
    France: 'FR',
  }

  useEffect(() => {
    props.checkForPollutionAppDataInLocalStorage()
  }, [])

  useEffect(() => {
    props.savePollutionAppDataToLocalStorage()
  }, [props.searchValue, props.cityDetails])

  const renderTenMostPullutedCities = (cityObj, index) => {
    return (
      <Accordion
        key={index}
        id={index}
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
        activeAccordionState={activeAccordionState}
        setActiveAccordionState={setActiveAccordionState}
        errorMessage={props.cityDetailsErrors[cityObj.city]}
        isOffline={props.isOffline}
      />
    )
  }
  return (
    <AppWrapper>
      <OfflineMessage isOffline={props.isOffline} />
      <SearchForm
        isLoading={props.isLoading}
        searchValue={props.searchValue}
        allowedCountries={allowedCountries}
        updateSearchValue={props.updateSearchValue}
        fetchLatestPollutionMeasurments={props.fetchLatestPollutionMeasurments}
      />
      <ErrorMessage isOffline={props.isOffline} errorMessage={props.errorMessage} />
      <ListWithLoading
        isLoading={props.isLoading}
        list={props.tenMostPullutedCitiesInGivenCountry}
        listRenderer={renderTenMostPullutedCities}
      />
    </AppWrapper>
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
    cityDetailsErrors: state.cityDetails.errors,
  }
}

export default connect(mapStateToProps, {
  updateSearchValue,
  fetchLatestPollutionMeasurments,
  getCityDetails,
  checkForPollutionAppDataInLocalStorage,
  savePollutionAppDataToLocalStorage,
})(App)
