import React from 'react'
import { Form, Input, Button } from 'antd'
import styles from './proteinform.module.css'

const ProteinForm = ({
  setBasicInfo,
  setShowMutationForm,
  setShowProteinForm,
  setShowEligibleSection,
  showProteinForm,
  setCurrent,
}: any) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  }

  const Demo = () => {
    const onFinish = (values: any) => {
      console.log('Success:', values)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className={styles['protein-form']}>
      <div style={{ width: '60%' }}>
        <h1>What is the size of the protein?</h1>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={Demo}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            htmlFor="less-amino"
            style={{
              fontSize: 'small',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Input
              type="radio"
              id="less-amino"
              style={{ marginRight: '0.5rem' }}
            />
            {/* <Icon
              name="chevron-left"
              className={styles['icon-left']}
            /> */}
            1100 amino acids
          </Form.Item>

          <Form.Item
            htmlFor="more-amino"
            style={{
              fontSize: 'small',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Input
              type="radio"
              id="more-amino"
              style={{ marginRight: '0.5rem' }}
            />
            {/* <Icon
              name="chevron-right"
              className={styles['arow-icon']}
            /> */}
            1100 mino acids
          </Form.Item>

          <Form.Item
            htmlFor="dont-know-btn"
            style={{
              fontSize: 'small',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Input type="radio" id="dont-know-btn" />
            Dont Know
          </Form.Item>

          <Form.Item style={{ display: 'flex', marginTop: '1rem' }}>
            <Button
              onClick={() => {
                setShowProteinForm(false)
                setBasicInfo(false)
                setShowMutationForm(true)
                setCurrent(1)
              }}
            >
              Back
            </Button>

            <Button
              onClick={() => {
                setBasicInfo(false)
                setShowMutationForm(false)
                setShowProteinForm(false)
                setShowEligibleSection(true)
              }}
              style={{ marginLeft: '0.25rem' }}
            >
              Determine Feasibility
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles['protein-form-one']}>
        <div>
          {showProteinForm ? (
            <img
              src="/eligibility_3.png"
              width={300}
              alt="proteinFormImage"
            />
          ) : null}
        </div>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy
          text used in laying out print, graphic or web designs.
        </p>
        <p>
          The passage is attributed to an unknown typesetter in the
          15th century who is thought to have scrambled parts of
          Ciceros De.
        </p>
      </div>
    </div>
  )
}

export default ProteinForm
