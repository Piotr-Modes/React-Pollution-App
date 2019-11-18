import React, { useState, useRef, useEffect } from 'react'
import Loader from './utylities/Loader'
import ErrorMessage from './utylities/ErrorMessage'

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
    // return ()=>toggleAccordion()
  }

  const toggleAccordion = () => {
    setActiveState(!activeState)
    setHeightState(activeState ? '0px' : `${content.current.scrollHeight}px`)
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${activeState ? 'active' : ''}`} onClick={handleOnClick}>
        <p className="accordion__number">{props.listNumber}.</p>
        <p className="accordion__title">{props.title}</p>
        <p className="accordion__danger">
          <span>{props.pm25Value}</span> pm2.5
        </p>
        <i className="fas fa-chevron-right"></i>
      </button>
      <div ref={content} style={{ maxHeight: `${heightState}` }} className="accordion__content">
        {props.content ? (
          <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content }} />
        ) : (
          <div className="accordion__text">
            {props.errorMessage ? (
              <ErrorMessage isOffline={props.isOffline} errorMessage={props.errorMessage} />
            ) : (
              <Loader />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Accordion
