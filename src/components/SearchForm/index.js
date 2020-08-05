import React, { useEffect, useState } from 'react'
import { capitalize } from '../../helperFunctions'
import Autocomplete from '../Autocomplete'
import {
  StyledForm,
  SearchFormErrors,
  SearchFormHeader,
  SearchFormInputsWrapper,
  StyledButton,
} from './Styles'

const SearchForm = props => {
  const [searchFormState, setSearchFormState] = useState({
    formErrors: [],
    formTouched: false,
  })

  useEffect(() => {
    if (searchFormState.formTouched) isSearchFormValid(props.searchValue)
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

  const handleOnFocus = () => {
    setSearchFormState({ ...searchFormState, formTouched: true })
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
    <StyledForm onFocus={handleOnFocus} onSubmit={handleFormSubmit}>
      <SearchFormHeader>Search for the most polluted cities in:</SearchFormHeader>
      <SearchFormInputsWrapper>
        <SearchFormErrors formErrors={searchFormState.formErrors[0]} />
        <Autocomplete
          suggestions={Object.keys(props.allowedCountries)}
          handleFormSubmit={props.handleFormSubmit}
          searchValue={props.searchValue}
          updateSearchValue={props.updateSearchValue}
          placeholder="Country"
        />
        <StyledButton type="submit">
          <i className="fas fa-search" />
        </StyledButton>
      </SearchFormInputsWrapper>
    </StyledForm>
  )
}

export default SearchForm
