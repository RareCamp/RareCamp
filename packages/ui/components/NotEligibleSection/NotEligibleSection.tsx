import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import styles from './noteligible.module.css';

function NotEligibleSection({ isShowEligibleSection }: any) {
  return (
    <div className={styles['not-eligible-section']}>
      <div className={styles['not-eligible-divOne']}>
        <img
          src="/Illustrations16.png"
          width={300}
          alt="noteligibleImage"
        />
        <h1>SSMD is not eligible for AAV based Gene Therapy</h1>
        <p>
          You can still start a program, but we recommend you reach
          out to our science team for futher evaluation.
        </p>
        <div>
          <Button
            // label="Talk to our science team"
            // icon=""
            // size="custom"
            // onClick={() => {}}
            type="primary"
            // className="text-xs w-42 py-2 px-4 rounded text-white mt-6 focus:outline-none"
          >
            Talk to our science team
          </Button>
          <Link href="/workspace">
            <Button
              // label="Add program"
              icon="+"
              style={{ marginLeft: '0.5rem' }}
              // size="custom"
              // color="tertiary"
              // className="text-xs w-42 border border-blue-400 ml-2 py-2 px-4 rounded text-gray-400 mt-6 focus:outline-none"
              onClick={() => {}}
            >
              Add program
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles['not-eligible-divTwo']}>
        <div>
          {isShowEligibleSection ? (
            <h1>How was this determined?</h1>
          ) : (
            <h1>How was this determined?</h1>
          )}
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

export default NotEligibleSection;
