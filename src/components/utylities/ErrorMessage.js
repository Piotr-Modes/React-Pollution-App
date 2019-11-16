import React from 'react'
import { Offline, Online } from 'react-detect-offline'

const ErrorMessage = ({ errorMessage }) =>
  errorMessage ? (
    <div className="error-message">
      <Online>{errorMessage}</Online>
      <Offline>You are offline...</Offline>
    </div>
  ) : null

export default ErrorMessage
