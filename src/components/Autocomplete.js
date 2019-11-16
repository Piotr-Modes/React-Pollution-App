import React, { useState } from 'react'

const Autocomplete = props => {
  const [autocompleteState, setAutocompleteState] = useState({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
  })

  const onChange = e => {
    const { suggestions } = props
    const userInput = e.currentTarget.value

    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    )

    setAutocompleteState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
    })
    props.updateSearchValue(userInput)
  }

  const onClick = e => {
    setAutocompleteState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
    })
    props.updateSearchValue(e.currentTarget.innerText)
  }

  const onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = autocompleteState

    if (e.keyCode === 13) {
      //enter
      setAutocompleteState({
        ...autocompleteState,
        activeSuggestion: 0,
        showSuggestions: false,
      })
      props.updateSearchValue(filteredSuggestions[activeSuggestion])
    } else if (e.keyCode === 38) {
      //up arrow
      if (activeSuggestion === 0) {
        return
      }
      setAutocompleteState({
        ...autocompleteState,
        activeSuggestion: autocompleteState.activeSuggestion - 1,
      })
    } else if (e.keyCode === 40) {
      //down arrow
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return
      }
      setAutocompleteState({ ...autocompleteState, activeSuggestion: activeSuggestion + 1 })
    }
  }

  const render = () => {
    let suggestionsListComponent
    if (autocompleteState.showSuggestions && props.searchValue) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {autocompleteState.filteredSuggestions.map((suggestion, index) => (
            <li
              className={index === autocompleteState.activeSuggestion ? 'active' : ''}
              key={suggestion}
              onClick={onClick}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )
    }

    return (
      <div>
        <input
          name="country"
          type="search"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={props.searchValue}
          placeholder={props.placeholder}
        />
        {suggestionsListComponent}
      </div>
    )
  }

  return render()
}

export default Autocomplete
