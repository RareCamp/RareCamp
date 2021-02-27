import { Button } from 'antd';
import React from 'react';
import styles from './mutation.module.css';

function MutationForm({
  setShowProteinForm,
  setBasicInfo,
  setShowMutationForm,
  showMutationForm,
}: any) {
  return (
    <div className={styles['mutation-form']}>
      <div style={{ width: '60%' }}>
        <h1>How do mutations in this gene cause the disease?</h1>
        <form style={{ width: '100%' }}>
          <div style={{ marginTop: '1rem' }}>
            <label
              htmlFor="protein-loss"
              style={{
                marginLeft: ' 0.25rem',
                fontSize: 'small',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <input
                type="radio"
                id="protein-loss"
                style={{ marginRight: '0.5rem' }}
              />
              Mutation leads to a LOSS of function or LOWER expression
              of gene or protein
            </label>
            <br />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label
              htmlFor="2"
              id="mutation-lead-btn"
              style={{
                marginLeft: ' 0.25rem',
                fontSize: 'small',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <input
                type="radio"
                id="mutation-lead-btn"
                style={{ marginRight: '0.5rem' }}
              />
              Mutation leads to a GAIN of function of gene or protein
            </label>
            <br />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label
              htmlFor="more-protein-btn"
              style={{
                marginLeft: ' 0.25rem',
                fontSize: 'small',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <input
                type="radio"
                id="more-protein-btn"
                style={{ marginRight: '0.5rem' }}
              />
              Mutation leads to a MORE protein to be produced
            </label>
            <br />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label
              htmlFor="dont-know-btn"
              style={{
                marginLeft: ' 0.25rem',
                fontSize: 'small',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <input
                type="radio"
                id="dont-know-btn"
                style={{ marginRight: '0.5rem' }}
              />
              Dont Know
            </label>
          </div>
          <div style={{ display: 'flex', marginTop: '1rem' }}>
            <Button
              size="small"
              onClick={() => {
                setShowProteinForm(false);
                setBasicInfo(true);
                setShowMutationForm(false);
              }}
            >
              Back
            </Button>
            <Button
              type="primary"
              size="small"
              style={{ marginLeft: '0.25rem' }}
              onClick={() => {
                setShowProteinForm(true);
                setBasicInfo(false);
                setShowMutationForm(false);
              }}
            >
              Next
            </Button>
          </div>
        </form>
      </div>
      <div className={styles['mutation-form-one']}>
        <div>
          {showMutationForm ? (
            <img
              src="/Illustrations14.png"
              width={300}
              alt="mutationImage"
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

export default MutationForm;
