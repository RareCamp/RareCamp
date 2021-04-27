import { AppLayout } from 'components/AppLayout'
import styled from 'styled-components'
import React, { useEffect } from 'react'
import { Button, Form, Input, Radio, Steps } from 'antd'
import {
  QuestionnaireIllustration,
  QuestionnaireResult,
} from 'components/Pages/Questionaire'
import Link from 'next/link'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { MutationType, ProteinSize, Questionnaire } from 'types'
import {
  mutationsTypesMap,
  proteinSizeTypesMap,
} from 'constants/maps'
import PageTitle from 'components/PageTitle'

const { Step } = Steps
const OFForm = styled(Form)`
  margin-top: 24px;
  max-width: 530px;
  .ant-radio-wrapper {
    display: block;
    height: 30px;
    line-height: 30px;
  }
`

const DiseaseForm = () => {
  return (
    <>
      <Form.Item
        label="Disease Name"
        name="disease"
        rules={[
          { required: true, message: 'Please input Disease Name!' },
        ]}
      >
        <Input placeholder="example: cystic fibrosis" />
      </Form.Item>
      <Form.Item
        label="Causal Gene Name"
        name="causalGene"
        rules={[
          {
            required: true,
            message: 'Please input Causal Gene Name!',
          },
        ]}
      >
        <Input placeholder="example: CFTR" />
      </Form.Item>
      <Form.Item
        label="Foundation or Organization Name"
        name="foundation"
        rules={[
          {
            required: true,
            message: 'Please input Foundation or Organization Name!',
          },
        ]}
      >
        <Input placeholder="example: Cystic Fibrosis Gene Therapy Consortium " />
      </Form.Item>
    </>
  )
}
const MutationForm = () => {
  return (
    <>
      <Form.Item
        label="How do mutations in this gene cause the disease?"
        name="mutationType"
        rules={[
          {
            required: true,
            message: 'Please select one of the options!',
          },
        ]}
      >
        <Radio.Group>
          <Radio value={MutationType.LEADS_TO_LOSS}>
            {mutationsTypesMap[MutationType.LEADS_TO_LOSS]}
          </Radio>
          <Radio value={MutationType.LEADS_TO_GAIN}>
            {mutationsTypesMap[MutationType.LEADS_TO_GAIN]}
          </Radio>
          <Radio value={MutationType.LEADS_TO_MORE}>
            {mutationsTypesMap[MutationType.LEADS_TO_MORE]}
          </Radio>
          <Radio value={MutationType.NOT_SURE}>
            {mutationsTypesMap[MutationType.NOT_SURE]}
          </Radio>
        </Radio.Group>
      </Form.Item>
    </>
  )
}
const ProteinFrom = () => {
  return (
    <>
      <Form.Item
        label="What is the size of the protein?"
        name="proteinSize"
        rules={[
          {
            required: true,
            message: 'Please select one of the options!',
          },
        ]}
      >
        <Radio.Group>
          <Radio value={ProteinSize.LESS_THAN_1100}>
            {proteinSizeTypesMap[ProteinSize.LESS_THAN_1100]}
          </Radio>
          <Radio value={ProteinSize.MORE_THAN_1100}>
            {proteinSizeTypesMap[ProteinSize.MORE_THAN_1100]}
          </Radio>
          <Radio value={ProteinSize.NOT_SURE}>
            {proteinSizeTypesMap[ProteinSize.NOT_SURE]}
          </Radio>
        </Radio.Group>
      </Form.Item>
    </>
  )
}

const steps = [
  {
    title: 'Disease and Foundation Info',
    content: <DiseaseForm />,
  },
  {
    title: 'Mutation',
    content: <MutationForm />,
  },
  {
    title: 'Protein',
    content: <ProteinFrom />,
  },
]
const QuestionnaireContainer = styled('div')`
  display: flex;
  margin: 24px;
  padding: 24px;
  border-radius: 8px;
  box-shadow: inset 1px 0 0 0 #f0f0f0, inset 0 1px 0 0 #f0f0f0,
    inset -1px 0 0 0 #f0f0f0;
  border: solid 1px #f0f0f0;
  background-color: #ffffff;
  .questionnaire-form {
    border-right: 1px solid #f0f0f0;
    flex: 2;
    .ant-steps {
      max-width: 650px;
      .first-step {
        flex: 2;
      }
    }
    .steps-action {
      button {
        border-radius: 2px;
      }
    }
  }
  .questionnaire-illustration {
    flex: 1;
  }
`
const PageHeader = styled('div')`
  padding: 24px;
  background-color: #ffffff;
  display: flex;
  align-items: baseline;
  border: 1px solid #eee;

  .anticon.anticon-arrow-left {
    margin-right: 17.5px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.85);
  }
`

function isGeneTherapyFeasible(answers: Questionnaire): boolean {
  if (
    answers.mutationType === MutationType.NOT_SURE ||
    answers.proteinSize === ProteinSize.NOT_SURE
  )
    return true
  return (
    answers.mutationType === MutationType.LEADS_TO_LOSS &&
    answers.proteinSize === ProteinSize.LESS_THAN_1100
  )
}
export default function questionnaire() {
  const [current, setCurrent] = React.useState(0)
  const [formValues, setFormValues] = React.useState({})
  const [feasibility, setFeasibility] = React.useState({
    isFeasible: false,
    assessmentFinished: false,
    answers: {},
  })
  const [content, setContent] = React.useState({
    imgURL: '/Group148.png',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De",
  })

  React.useEffect(() => {
    if (current === 0)
      setContent({
        imgURL: '/Group148.png',
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De",
      })
    else if (current === 1)
      setContent({
        imgURL: '/Illustrations14.png',
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De",
      })
    else
      setContent({
        imgURL: '/Illustrations13.png',
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De",
      })
  }, [current])

  const [form] = Form.useForm()
  useEffect(() => {
    setFormValues({ ...formValues, ...form.getFieldsValue() })
  }, [form])
  async function handleFormSubmit(values: Questionnaire) {
    const isFeasible = isGeneTherapyFeasible(values)
    setFeasibility({
      isFeasible,
      assessmentFinished: true,
      answers: values,
    })
  }

  const nextStep = () =>
    form.validateFields().then(() => setCurrent(current + 1))
  return (
    <AppLayout
      title={<PageTitle title="programs" />}
      selectedKey="programs"
    >
      <PageHeader>
        <Link href="/workspace/intro">
          <ArrowLeftOutlined />
        </Link>
        <div>
          <h3>Determine eligibility for AAV-based gene therapy</h3>
          <span>
            Complete this short questionnaire to help our team
            determine your eligibility.
          </span>
        </div>
      </PageHeader>
      <QuestionnaireContainer>
        <div className="questionnaire-form">
          {feasibility.assessmentFinished ? (
            <QuestionnaireResult
              isFeasible={feasibility.isFeasible}
              answers={feasibility.answers as Questionnaire}
            />
          ) : (
            <>
              <Steps current={current}>
                {steps.map((item, index) => (
                  <Step
                    className={index === 0 ? 'first-step' : ''}
                    key={item.title}
                    title={item.title}
                  />
                ))}
              </Steps>
              <OFForm
                onFinish={handleFormSubmit}
                initialValues={{
                  proteinSize: ProteinSize.LESS_THAN_1100,
                  mutationType: MutationType.LEADS_TO_LOSS,
                }}
                layout="vertical"
                form={form}
              >
                <div className="steps-content">
                  {steps.map((item, index) => (
                    <div
                      key={item.title}
                      style={{
                        display: index === current ? 'block' : 'none',
                      }}
                    >
                      {item.content}
                    </div>
                  ))}
                </div>
                <div className="steps-action">
                  {current > 0 && (
                    <Button
                      style={{ margin: '0 8px' }}
                      onClick={() => setCurrent(current - 1)}
                    >
                      Back
                    </Button>
                  )}

                  {current < steps.length - 1 && (
                    <Button type="primary" onClick={nextStep}>
                      Next
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button type="primary" htmlType="submit">
                      Check Eligibility
                    </Button>
                  )}
                </div>
              </OFForm>
            </>
          )}
        </div>
        <QuestionnaireIllustration
          feasibility={feasibility}
          className="questionnaire-illustration"
          imgURL={content.imgURL}
          description={content.description}
        />
      </QuestionnaireContainer>
    </AppLayout>
  )
}
