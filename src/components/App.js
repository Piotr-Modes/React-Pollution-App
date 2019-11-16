import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchLatestPollutionMeasurments, getCityDetails } from '../redux/actions'

const App = props => {
  // useEffect(() => {
  //   props.fetchLatestPollutionMeasurments('PL')

  // }, [])
  return <div className="app">app</div>
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {
  fetchLatestPollutionMeasurments,
  getCityDetails,
})(App)
