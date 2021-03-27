import React, { useRef } from 'react'
import styles from 'styles/workspace.module.css'
import { Button, Input } from 'antd'
import formstyles from './basicform.module.css'

const BasicInfoForm = ({
  setShowMutationForm,
  setShowProteinForm,
  setBasicInfo,
  showBasicInfoForm,
  setCurrent,
}: any) => {
  const inputRef = useRef(null)
  return (
    <div className={formstyles['basic-form']}>
      <div style={{ width: '60%' }}>
        <h1>Let’s start with the basics</h1>
        <form className={`${styles['info-form']}`}>
          <Input
            placeholder="Enter disease name"
            name="diseasename"
          />
          <Input placeholder="Enter gene name" value="" />
          <Input placeholder="Please enter name of the foundation or patient organization" />
          <Button
            type="primary"
            style={{ marginTop: '20px' }}
            onClick={() => {
              setShowMutationForm(true)
              setShowProteinForm(false)
              setBasicInfo(false)
              setCurrent(1)
            }}
          >
            Next
          </Button>
        </form>
      </div>
      <div className={formstyles['basic-form-one']}>
        <div>
          {showBasicInfoForm ? (
            <img src="/Group148.png" width={300} alt="infoImage" />
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

export default BasicInfoForm
