import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  updateSearchValue,
  fetchLatestPollutionMeasurments,
  getCityDetails,
} from '../redux/actions'

import SearchForm from './SearchForm'

const App = props => {
  // useEffect(() => {
  //   props.fetchLatestPollutionMeasurments('PL')

  // }, [])
  return (
    <div className="app">
      <SearchForm
        isLoading={props.isLoading}
        searchValue={props.searchValue}
        updateSearchValue={props.updateSearchValue}
        fetchLatestPollutionMeasurments={props.fetchLatestPollutionMeasurments}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    searchValue: state.searchValue,
    isLoading: state.latestPollutionMeasurments.isLoading,
  }
}

export default connect(mapStateToProps, {
  updateSearchValue,
  fetchLatestPollutionMeasurments,
  getCityDetails,
})(App)
