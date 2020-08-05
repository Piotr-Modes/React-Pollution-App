import React, { useState, useRef, useEffect } from 'react'
import Loader from '../utilities/Loader'
import ErrorMessage from '../utilities/ErrorMessage'
import {
  AccordionSection,
  AccordionButton,
  AccordionNumber,
  AccordionTitle,
  AccordionDanger,
  AccordionIcon,
  AccordionContent,
  AccordionText,
} from './Styles'

const Accordion = props => {
  const [activeState, setActiveState] = useState(false)
  const [heightState, setHeightState] = useState('0px')

  const content = useRef(null)

  useEffect(() => {
    setHeightState(!activeState ? '0px' : `${content.current.scrollHeight}px`)
  }, [props.content])

  useEffect(() => {
    if (props.activeAccordionState === props.id) return
    if (activeState) toggleAccordion()
  }, [props.activeAccordionState])

  const handleOnClick = () => {
    if (!props.content && !activeState) {
      props.getCityDetails()
    }
    props.setActiveAccordionState(props.id)
    toggleAccordion()
  }

  const toggleAccordion = () => {
    setActiveState(!activeState)
    setHeightState(activeState ? '0px' : `${content.current.scrollHeight}px`)
  }

  return (
    <AccordionSection>
      <AccordionButton activeState={activeState} onClick={handleOnClick}>
        <AccordionNumber>{props.listNumber}.</AccordionNumber>
        <AccordionTitle>{props.title}</AccordionTitle>
        <AccordionDanger dangerText={props.pm25Value} neutralText=" pm2.5" />
        <AccordionIcon activeState={activeState} className="fas fa-chevron-right"></AccordionIcon>
      </AccordionButton>
      <AccordionContent ref={content} calculatedMaxHeight={heightState}>
        {props.content ? (
          <AccordionText dangerouslySetInnerHTML={{ __html: props.content }} />
        ) : (
          <AccordionText>
            {props.errorMessage ? (
              <ErrorMessage isOffline={props.isOffline} errorMessage={props.errorMessage} />
            ) : (
              <Loader />
            )}
          </AccordionText>
        )}
      </AccordionContent>
    </AccordionSection>
  )
}

export default Accordion
