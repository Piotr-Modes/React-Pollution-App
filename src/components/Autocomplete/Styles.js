import styled, { css } from 'styled-components'

const AutocompleteWrappper = styled.div`
  width: 250px;
  position: relative;
`
const StyledInput = styled.input`
  font-family: ${props => props.theme.fonts.main};
  font-size: 1.8rem;
  width: 100%;
  border: none;
  height: 43px;
  padding: 23px 15px 20px 15px;
  color: ${props => props.theme.colors.primary};
  outline: none;
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.4);

  &:focus {
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.0125),
      0 0 8px rgba(${props => props.theme.colors.positive}, 0.9);
  }
`
const SuggestionsList = styled.ul`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  background: #274046;
  z-index: 9;
`
const Suggestion = styled.li`
  padding: 10px 0;
  background: rgba(255, 255, 255, 0.35);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ activeState }) =>
    activeState &&
    css`
      background: rgba(255, 255, 255, 0.2);
    `};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

export { AutocompleteWrappper, StyledInput, SuggestionsList, Suggestion }
