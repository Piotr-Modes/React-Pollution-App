import styled, { css } from 'styled-components'

const AccordionIcon = styled.i`
  position: absolute;
  right: -20px;
  transition: all 0.2s ease;

  ${({ activeState }) =>
    activeState &&
    css`
      color: ${props => props.theme.colors.positive};
      transform: rotate(90deg);
    `};
`

export default AccordionIcon
