import React, { useState, useRef, useEffect } from 'react'
import Loader from './utylities/Loader'

const Accordion = props => {
  const [activeState, setActiveState] = useState(false)
  const [heightState, setHeightState] = useState('0px')

  const content = useRef(null)

  useEffect(() => {
    setHeightState(!activeState ? '0px' : `${content.current.scrollHeight}px`)
  }, [props.content])

  const handleOnClick = () => {
    if (!props.content && !activeState) {
      props.getCityDetails()
    }
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
            <Loader />{' '}
          </div>
        )}
      </div>
    </div>
  )
}

export default Accordion
