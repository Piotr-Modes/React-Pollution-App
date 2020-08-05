import React from 'react'
import StyledOfflineMessage from './Styles'

const OfflineMessage = ({ isOffline }) =>
  isOffline ? <StyledOfflineMessage>You are offline...</StyledOfflineMessage> : null

export default OfflineMessage
