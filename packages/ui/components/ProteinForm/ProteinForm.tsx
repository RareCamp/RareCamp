import { Icon } from 'components/Icon';
import { Button } from 'antd';
import React from 'react';
import styles from './proteinform.module.css';

function ProteinForm({
  setBasicInfo,
  setShowMutationForm,
  setShowProteinForm,
  setShowEligibleSection,
  showProteinForm,
}: any) {
  return (
    <div className={styles['protein-form']}>
      <div style={{ width: '60%' }}>
        <h1>What is the size of the protein?</h1>
        <form style={{ width: '100%' }}>
          <div style={{ marginTop: '1rem' }}>
            <label
              htmlFor="less-amino"
              // className="ml-1 text-sm flex items-center"
              style={{
                marginLeft: ' 0.25rem',
                fontSize: 'small',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <input
                type="radio"
                id="less-amino"
                style={{ marginRight: '0.5rem' }}
              />
              <Icon
                name="chevron-left"
                className={styles['icon-left']}
              />
              1100 amino acids
            </label>
            <br />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label
              htmlFor="more-amino"
              style={{
                marginLeft: ' 0.25rem',
                fontSize: 'small',
                display: 'flex',
                alignItems: 'center',
              }}
              // className="ml-1 text-sm flex items-center"
            >
              <input
                type="radio"
                id="more-amino"
                style={{ marginRight: '0.5rem' }}
              />
              <Icon
                name="chevron-right"
                className={styles['arow-icon']}
              />{' '}
              1100 amino acids
            </label>
            <br />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label
              htmlFor="4"
              style={{
                marginLeft: '0.25rem',
                fontSize: 'small',
                display: 'flex',
                alignItems: 'center',
              }}
              // className="ml-1 text-sm flex items-center"
            >
              <input type="radio" style={{ marginRight: '0.75rem' }} />
              Dont Know
            </label>
          </div>
          <div style={{ display: 'flex', marginTop: '1rem' }}>
            {/* <Button
              label="Back"
              color="tertiary"
              size="sm"
              className="block text-xs text-gray-400 focus:outline-none"
              onClick={() => {
                setShowProteinForm(false);
                setBasicInfo(false);
                setShowMutationForm(true);
              }}
            /> */}
            <Button
              onClick={() => {
                setShowProteinForm(false);
                setBasicInfo(false);
                setShowMutationForm(true);
              }}
            >
              Back
            </Button>

            {/* <Button
              label="Determine Feasibility"
              color="primary"
              size="custom"
              className="block text-xs text-white  py-2 px-4 rounded focus:outline-none ml-1"
              onClick={() => {
                setBasicInfo(false);
                setShowMutationForm(false);
                setShowProteinForm(false);
                setShowEligibleSection(true);
              }}
            /> */}
            <Button
              onClick={() => {
                setBasicInfo(false);
                setShowMutationForm(false);
                setShowProteinForm(false);
                setShowEligibleSection(true);
              }}
              style={{ marginLeft: '0.25rem' }}
            >
              Determine Feasibility
            </Button>
          </div>
        </form>
      </div>
      <div className={styles['protein-form-one']}>
        <div>
          {showProteinForm ? (
            <img
              src="/Illustrations13.png"
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
  );
}

export default ProteinForm;
