import styled from 'styled-components'

const AccordionContent = styled.div`
  background: rgba(white, 0.05);
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  max-height: ${({ calculatedMaxHeight }) => calculatedMaxHeight};
`

export default AccordionContent
