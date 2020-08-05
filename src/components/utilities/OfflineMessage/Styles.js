import styled from 'styled-components'

const StyledOfflineMessage = styled.div`
  font-size: 1.7rem;
  color: ${props => props.theme.colors.negative};
  position: fixed;
  left: 10px;
  top: 10px;
`

export default StyledOfflineMessage
