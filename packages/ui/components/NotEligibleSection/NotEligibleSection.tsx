import React from 'react';
import Link from 'next/link';
import { Button } from 'components/Button';

function NotEligibleSection({ isShowEligibleSection }: any) {
  return (
    <div className="flex justify-between ">
      <div className="w-3/5 flex flex-col items-center">
        <img
          src="/Illustrations16.png"
          width={300}
          alt="noteligibleImage"
        />
        <h1 className="font-semibold text-2xl mt-6">
          SSMD is not eligible for AAV based Gene Therapy
        </h1>
        <p className="text-gray-400 font-extralight mt-6 text-sm text-center">
          You can still start a program, but we recommend you reach
          out to our science team for futher evaluation.
        </p>
        <div>
          <Button
            label="Talk to our science team"
            icon=""
            size="custom"
            onClick={() => {}}
            color="primary"
            className="text-xs w-42 py-2 px-4 rounded text-white mt-6 focus:outline-none"
          />
          <Link href="/workspace">
            <Button
              label="Add program"
              icon="+"
              size="custom"
              color="tertiary"
              className="text-xs w-42 border border-blue-400 ml-2 py-2 px-4 rounded text-gray-400 mt-6 focus:outline-none"
              onClick={() => {}}
            />
          </Link>
        </div>
      </div>
      <div className="w-2/5 px-4 flex flex-col justify-center  items-center">
        <div>
          {isShowEligibleSection ? (
            <h1 className="text-center  mb-10 text-gray-400 text-base extralight">
              How was this determined?
            </h1>
          ) : (
            <h1 className="text-center  mb-10 text-gray-400 text-base extralight">
              How was this determined?
            </h1>
          )}
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
}

export default NotEligibleSection;
