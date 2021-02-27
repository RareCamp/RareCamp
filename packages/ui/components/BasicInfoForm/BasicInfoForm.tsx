import React, { useRef } from 'react';
import styles from 'styles/workspace.module.css';
import formstyles from './basicform.module.css';
import { Button, Input } from 'antd';
const BasicInfoForm = ({
  setShowMutationForm,
  setShowProteinForm,
  setBasicInfo,
  showBasicInfoForm,
}: any) => {
  const inputRef = useRef(null);
  return (
    <div className={formstyles['basic-form']}>
      <div style={{ width: '60%' }}>
        <h1>Let’s start with the basics</h1>
        <form className={`${styles['info-form']}`}>
          <Input
            placeholder="Enter disease name"
            // className="mt-4 placeholder-gray-400 font-extralight"
            name="diseasename"
            // value=""
            // reference={inputRef}
          />
          <Input
            // label="Casual Gene Name"
            placeholder="Enter gene name"
            // className="mt-4 placeholder-gray-400 font-extralight"
            // name="casualname"
            value=""
            // reference={inputRef}
          />
          <Input
            // label="Foundation/Patient Organization Name "
            placeholder="Please enter name of the foundation or patient organization"
            // className="mt-4 placeholder-gray-400 font-extralight"
            // name="foundationname"
            // value=""
            // reference={inputRef}
          />
          <Button
            // label="Next"
            // color="primary"
            type="primary"
            style={{ marginTop: '20px' }}
            // className="text-white text-xs focus:outline-none"
            onClick={() => {
              setShowMutationForm(true);
              setShowProteinForm(false);
              setBasicInfo(false);
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
  );
};

export default BasicInfoForm;
