import React, { useRef } from 'react';
import { InputField } from 'components/InputField';
import styles from 'styles/workspace.module.css';
import { Button } from 'components/Button';

const BasicInfoForm = ({
  setShowMutationForm,
  setShowProteinForm,
  setBasicInfo,
  showBasicInfoForm,
}: any) => {
  const inputRef = useRef(null);
  return (
    <div className="flex justify-between ">
      <div className="w-3/5">
        <h1 className="mt-6 text-2xl font-normal">
          Let’s start with the basics
        </h1>
        <form className={`w-full ${styles['info-form']}`}>
          <InputField
            label="Disease Name"
            placeholder="Enter disease name"
            className="mt-4 placeholder-gray-400 font-extralight"
            name="diseasename"
            value=""
            reference={inputRef}
          />
          <InputField
            label="Casual Gene Name"
            placeholder="Enter gene name"
            className="mt-4 placeholder-gray-400 font-extralight"
            name="casualname"
            value=""
            reference={inputRef}
          />
          <InputField
            label="Foundation/Patient Organization Name "
            placeholder="Please enter name of the foundation or patient organization"
            className="mt-4 placeholder-gray-400 font-extralight"
            name="foundationname"
            value=""
            reference={inputRef}
          />
          <Button
            label="Next"
            color="primary"
            size="sm"
            className="text-white text-xs focus:outline-none"
            onClick={() => {
              setShowMutationForm(true);
              setShowProteinForm(false);
              setBasicInfo(false);
            }}
          />
        </form>
      </div>
      <div className="w-2/5 px-4 flex flex-col justify-center items-center">
        <div>
          {showBasicInfoForm ? (
            <img src="/Group148.png" width={300} alt="infoImage" />
          ) : null}
        </div>
        <p className="text-center text-sm text-gray-400 font-extralight">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy
          text used in laying out print, graphic or web designs.
        </p>
        <p className="text-center text-sm text-gray-400 font-extralight">
          The passage is attributed to an unknown typesetter in the
          15th century who is thought to have scrambled parts of
          Ciceros De.
        </p>
      </div>
    </div>
  );
};

export default BasicInfoForm;
