import { Button } from 'components/Button';
import React from 'react';

function MutationForm({
  setShowProteinForm,
  setBasicInfo,
  setShowMutationForm,
  showMutationForm,
}: any) {
  return (
    <div className="flex justify-between ">
      <div className="w-3/5">
        <h1 className="mt-6 text-2xl font-normal">
          How do mutations in this gene cause the disease?
        </h1>
        <form className="w-full">
          <div className="mt-4">
            <label
              htmlFor="protein-loss"
              className="ml-1 text-sm flex items-center"
            >
              <input
                type="radio"
                id="protein-loss"
                className="mr-2"
              />
              Mutation leads to a LOSS of function or LOWER expression
              of gene or protein
            </label>
            <br />
          </div>
          <div className="mt-4">
            <label
              htmlFor="2"
              id="mutation-lead-btn"
              className="ml-1 text-sm flex items-center"
            >
              <input
                type="radio"
                id="mutation-lead-btn"
                className="mr-2"
              />
              Mutation leads to a GAIN of function of gene or protein
            </label>
            <br />
          </div>
          <div className="mt-4">
            <label
              htmlFor="more-protein-btn"
              className="ml-1 text-sm flex items-center"
            >
              <input
                type="radio"
                id="more-protein-btn"
                className="mr-2"
              />
              Mutation leads to a MORE protein to be produced
            </label>
            <br />
          </div>
          <div className="mt-4">
            <label
              htmlFor="dont-know-btn"
              className="ml-1 text-sm flex items-center"
            >
              <input
                type="radio"
                id="dont-know-btn"
                className="mr-2"
              />
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
                setBasicInfo(true);
                setShowMutationForm(false);
              }}
            />
            <Button
              label="Next"
              color="primary"
              size="sm"
              className="block text-xs text-white focus:outline-none ml-1"
              onClick={() => {
                setShowProteinForm(true);
                setBasicInfo(false);
                setShowMutationForm(false);
              }}
            />
          </div>
        </form>
      </div>
      <div className="w-2/5 px-4 flex flex-col justify-center items-center">
        <div>
          {showMutationForm ? (
            <img
              src="/Illustrations14.png"
              width={300}
              alt="mutationImage"
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

export default MutationForm;
