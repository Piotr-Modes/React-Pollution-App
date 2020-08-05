import React from 'react'
import styled, { css } from 'styled-components'

const AccordionSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 6px 0;
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
`
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
const AccordionNumber = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  position: relative;
  left: -10px;
  color: ${props => props.theme.colors.primary};
`
const AccordionTitle = styled.p`
  font-size: 1.8rem;
  line-height: 15px;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
`
const StyledP = styled.p`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  margin-left: auto;
  & span {
    color: ${props => props.theme.colors.negative};
  }
`
const AccordionDanger = ({ dangerText, neutralText }) => {
  return (
    <StyledP>
      <span>{dangerText} </span> {neutralText}
    </StyledP>
  )
}

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
const AccordionContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  max-height: ${({ calculatedMaxHeight }) => calculatedMaxHeight};
`
const AccordionText = styled.div`
  text-align: justify;
  font-weight: 400;
  font-size: 1.3rem;
  padding: 18px;
`
export {
  AccordionSection,
  AccordionButton,
  AccordionNumber,
  AccordionTitle,
  AccordionDanger,
  AccordionIcon,
  AccordionContent,
  AccordionText,
}
