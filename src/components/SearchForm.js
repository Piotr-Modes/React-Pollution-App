import React, { useEffect, useState } from 'react'
import { capitalize } from '../helperFunctions'
import Autocomplete from './Autocomplete'

const SearchForm = props => {
  const [searchFormState, setSearchFormState] = useState({
    formErrors: [],
  })

  useEffect(() => {
    if (props.searchValue !== '') isSearchFormValid(props.searchValue)
  }, [props.searchValue])

  const isSearchFormValid = selectedCountry => {
    let valid = true
    const formErrors = []

    if (selectedCountry === '') {
      formErrors.push('Please fill in the country name')
      valid = false
    }
    if (Object.keys(props.allowedCountries).indexOf(selectedCountry) === -1) {
      formErrors.push(
        `Sorry, the only allowed options are: ${Object.keys(props.allowedCountries).join(', ')}`,
      )
      valid = false
    }
    setSearchFormState({ ...searchFormState, formErrors: [...formErrors] })
    return valid
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    if (props.isLoading) return
    const selectedCountry = capitalize(e.target.country.value)
    props.updateSearchValue(selectedCountry)

    if (!isSearchFormValid(selectedCountry)) return
    props.fetchLatestPollutionMeasurments(props.allowedCountries[selectedCountry])
  }
  return (
    <form className="search-form" onSubmit={handleFormSubmit}>
      <h1 className="search-form__header">Search for the most polluted cities in:</h1>
      <div className="search-form__inputs-container">
        <FormErrors formErrors={searchFormState.formErrors} />
        <Autocomplete
          suggestions={Object.keys(props.allowedCountries)}
          handleFormSubmit={props.handleFormSubmit}
          searchValue={props.searchValue}
          updateSearchValue={props.updateSearchValue}
          placeholder="Country"
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  )
}

const FormErrors = ({ formErrors }) => {
  return (
    <div className="form-errors">
      <p>{formErrors[0]}</p>
    </div>
  )
}

export default SearchForm
