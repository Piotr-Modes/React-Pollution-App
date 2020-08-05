import styled from 'styled-components'
import React from 'react'

const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  height: 270px;
  padding-bottom: 20px;
`
const SearchFormHeader = styled.h1`
  margin-bottom: 0;
  font-size: 3.3rem;
`
const SearchFormInputsWrapper = styled.div`
  position: relative;
  display: flex;
`
const FormErrorsWrapper = styled.div`
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`
const FormErrorsText = styled.p`
  font-size: 1.2rem;
  color: red;
  @media (max-width: 350px) {
    font-size: 1rem;
  }
}
`
const StyledButton = styled.button`
  display: flex;
  font-weight: bold;
  background: ${props => props.theme.colors.positive};
  border: none;
  padding: 10px 20px;
  color: white;
  height: 43px;
  font-size: 2rem;
  outline: none;
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`

const SearchFormErrors = ({ formErrors }) => {
  return (
    <FormErrorsWrapper>
      <FormErrorsText>{formErrors}</FormErrorsText>
    </FormErrorsWrapper>
  )
}

export { StyledForm, SearchFormErrors, SearchFormHeader, SearchFormInputsWrapper, StyledButton }
