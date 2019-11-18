import React from 'react'

const OfflineMessage = ({ isOffline }) =>
  isOffline ? <div className="offline-message">You are offline!</div> : null

export default OfflineMessage
