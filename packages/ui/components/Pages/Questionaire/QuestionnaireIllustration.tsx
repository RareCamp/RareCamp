import { Space } from 'antd'
import styled from 'styled-components'

const IllustrationContainer = styled(Space)`
  text-align: center;
  margin-bottom: 48px;
  justify-content: center;
  img {
    width: 238px;
  }
  p {
    width: 335px;
    color: rgba(0, 0, 0, 0.65);
  }
`
export default function QuestionnaireIllustration({
  imgURL,
  description,
  feasibility,
  ...props
}) {
  return (
    <IllustrationContainer
      {...props}
      size={24}
      direction="vertical"
      align="center"
    >
      {feasibility.assessmentFinished ? (
        <h4>how was this determined?</h4>
      ) : (
        <img src={imgURL} alt={description} />
      )}
      <p>{description}</p>
    </IllustrationContainer>
  )
}
