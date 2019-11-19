import React from 'react'

const ErrorMessage = ({ errorMessage, isOffline }) =>
  errorMessage ? (
    <div className="error-message">{isOffline ? 'You are offline...' : errorMessage}</div>
  ) : null

export default ErrorMessage
