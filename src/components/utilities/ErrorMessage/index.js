import React from 'react'
import StyledErrorMessage from './StyledErrorMessage'

const ErrorMessage = ({ errorMessage, isOffline }) =>
  errorMessage ? (
    <StyledErrorMessage>{isOffline ? 'You are offline...' : errorMessage}</StyledErrorMessage>
  ) : null

export default ErrorMessage
