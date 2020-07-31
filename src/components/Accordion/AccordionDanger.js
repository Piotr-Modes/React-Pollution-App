import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
  font-size: 1.3rem;
  color: rgba(#274046, 0.7);
  font-weight: 600;
  margin-left: auto;
  & span {
    color: ${props => props.theme.colors.negative};
  }
`
const AccordionDanger = ({ dangerText, neutralText }) => {
  return (
    <StyledP>
      <span>{dangerText}</span> {neutralText}
    </StyledP>
  )
}

export default AccordionDanger
