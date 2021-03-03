import { Button } from 'components/Button';
import React from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

function EligibleSection({
  setShowEligibleSection,
  isShowEligibleSection,
}: any) {
  const router = useRouter()
  async function createProgram() {
    const createProgramResponse = await axios.post('/programs', {
      program: {
        name: 'test',
      }
    })
    if (createProgramResponse?.data?.program) {
      router.push(`/programs/${createProgramResponse.data.program.id}`)
    }
  }

  return (
    <div className="flex justify-between ">
      <div className="flex flex-col items-center w-3/5">
        <img
          src="/Illustrations15.png"
          width={300}
          alt="proteinformImage"
        />
        <h1 className="font-semibold text-2xl mt-6">
          SSMD may be eligible for a AAV based Gene Therapy
        </h1>
        <p className="text-gray-400 font-extralight mt-6 text-sm text-center">
          The results are fowarded to our science team for further
          validation. They will reach out to you to collect more gene
          and patient information to confirm Gene therapy feasibility.
          Beyond that it is critical that the you partner with a
          qualified investigator and institution to develop a roadmap
          for your Gene therapy treatment.
        </p>
        <Button
          label="Create a new program"
          icon="+"
          size="custom"
          color="primary"
          className="text-xs w-42 py-2 px-4 rounded text-white mt-6 focus:outline-none"
          onClick={createProgram}
        />
      </div>
      <div className="w-2/5 px-4 flex flex-col justify-center items-center">
        <div className="">
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

export default EligibleSection;
