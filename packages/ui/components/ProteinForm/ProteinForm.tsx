import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import React from 'react';

function ProteinForm({
  setBasicInfo,
  setShowMutationForm,
  setShowProteinForm,
  setShowEligibleSection,
  showProteinForm,
}: any) {
  return (
    <div className="flex justify-between ">
      <div className="w-3/5">
        <h1 className="mt-6 text-2xl font-normal">
          What is the size of the protein?
        </h1>
        <form className="w-full">
          <div className="mt-4">
            <label
              htmlFor="less-amino"
              className="ml-1 text-sm flex items-center"
            >
              <input type="radio" id="less-amino" className="mr-2" />
              <Icon
                name="chevron-left"
                className="w-4 ml-1 text-black"
              />
              1100 amino acids
            </label>
            <br />
          </div>
          <div className="mt-4">
            <label
              htmlFor="more-amino"
              className="ml-1 text-sm flex items-center"
            >
              <input type="radio" id="more-amino" className="mr-2" />
              <Icon
                name="chevron-right"
                className="w-4 ml-1 text-black"
              />{' '}
              1100 amino acids
            </label>
            <br />
          </div>
          <div className="mt-4">
            <label
              htmlFor="4"
              className="ml-1 text-sm flex items-center"
            >
              <input type="radio" className="mr-4" />
              Dont Know
            </label>
          </div>
          <div className="flex mt-4">
            <Button
              label="Back"
              color="tertiary"
              size="sm"
              className="block text-xs text-gray-400 focus:outline-none"
              onClick={() => {
                setShowProteinForm(false);
                setBasicInfo(false);
                setShowMutationForm(true);
              }}
            />
            <Button
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
            />
          </div>
        </form>
      </div>
      <div className="w-2/5 px-4 flex flex-col justify-center items-center">
        <div>
          {showProteinForm ? (
            <img
              src="/Illustrations13.png"
              width={300}
              alt="proteinFormImage"
            />
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
}

export default ProteinForm;
