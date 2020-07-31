import styled, { css } from 'styled-components'

const AccordionButton = styled.button`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
  color: white;
  cursor: pointer;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: all 0.3s ease-in-out;

  & i {
    position: absolute;
    right: -20px;
    transition: all 0.2s ease;
  }

  ${({ activeState }) =>
    activeState &&
    css`
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.02);
    `};
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.02);
  }
  &.active i {
    color: ${props => props.theme.colors.positive};
    transform: rotate(90deg);
  }
`

export default AccordionButton
