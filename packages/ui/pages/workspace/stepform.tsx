import React, { useState, useRef } from 'react';
import { AppLayout } from 'components/AppLayout';
import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { InputField } from 'components/InputField';
import { LetterPic } from 'components/LetterPic';
import Link from 'next/link';
import styles from 'styles/workspace.module.css';

const stepform = () => {
  const [showBasicInfoForm, setBasicInfo] = useState(true);
  const [showMutationForm, setShowMutationForm] = useState(false);
  const [showProteinForm, setShowProteinForm] = useState(false);
  const [isShowEligibleSection, setShowEligibleSection] = useState(
    false,
  );
  const inputRef = useRef(null);

  return (
    <AppLayout>
      <div className="bg-gray-300 h-screen flex flex-col">
        <div className="flex bg-white border-b py-4 border-gray-200 w-full px-6">
          <h1 className="font-semibold">WorkSpace</h1>
        </div>
        <div>
          <div className="flex justify-between bg-white px-4 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between px-4">
              <Link href="/workspace">
                <span className="w-4 cursor-pointer">
                  <Icon
                    name="arrowleft"
                    className="hover:text-gray-400"
                  />
                </span>
              </Link>

              <div className="flex flex-col justify-between h-14 ml-4">
                <h1 className="font-semibold">
                  Determine feasibility for AAV based Gene Therapy
                </h1>
                <p className="text-sm text-gray-500">
                  Complete the short questionnaire crafted by our
                  network of scientists to assess AAV based gene
                  therapy feasibility.
                </p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="bg-white mt-8 px-4 p-6 rounded-xl">
              <div className="w-3/5">
                {showProteinForm ||
                showMutationForm ||
                showBasicInfoForm ? (
                  <div className="flex justify-between  items-center">
                    <div className="flex items-center">
                      <LetterPic
                        letter="1"
                        color="custom"
                        textColor={null}
                        className="bg-blue-400 text-white text-sm border-b-2 border-gray-200"
                        size="sm"
                      />
                      <span className="ml-1">Basic Info</span>
                    </div>
                    <span
                      className={`w-32 border-b-2 ${
                        showMutationForm || showProteinForm
                          ? 'border-blue-400'
                          : 'border-gray-200 '
                      }`}
                    />
                    <div className="flex items-center">
                      <LetterPic
                        letter="2"
                        color="custom"
                        textColor={null}
                        className={`text-sm border ${
                          showMutationForm || showProteinForm
                            ? 'border-blue-400  bg-blue-400 text-white'
                            : 'border-gray-200 text-gray-400 '
                        }`}
                        size="sm"
                      />
                      <span className="ml-1">Mutation</span>
                    </div>
                    <span
                      className={`w-32 border-b-2 ${
                        showProteinForm
                          ? 'border-blue-400'
                          : 'border-gray-200 '
                      }`}
                    />
                    <div className="flex items-center">
                      <LetterPic
                        letter="3"
                        color="custom"
                        textColor={null}
                        className={` text-sm  border ${
                          showProteinForm
                            ? 'border-blue-400 bg-blue-400 text-white'
                            : 'border-gray-200 text-gray-400'
                        }`}
                        size="sm"
                      />
                      <span className="ml-1">Protein</span>
                    </div>
                  </div>
                ) : null}
              </div>
              {showBasicInfoForm && (
                <>
                  <div className="flex justify-between ">
                    <div className="w-3/5">
                      <h1 className="mt-6 text-2xl font-normal">
                        Let’s start with the basics
                      </h1>
                      <form
                        className={`w-full ${styles['info-form']}`}
                      >
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
                          <img
                            src="/Group 148@2x.png"
                            width={300}
                            alt="infoImage"
                          />
                        ) : null}
                      </div>
                      <p className="text-center text-sm text-gray-400 font-extralight">
                        Lorem ipsum, or lipsum as it is sometimes
                        known, is dummy text used in laying out print,
                        graphic or web designs.
                      </p>
                      <p className="text-center text-sm text-gray-400 font-extralight">
                        The passage is attributed to an unknown
                        typesetter in the 15th century who is thought
                        to have scrambled parts of Ciceros De.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {showMutationForm && (
                <>
                  <div className="flex justify-between ">
                    <div className="w-3/5">
                      <h1 className="mt-6 text-2xl font-normal">
                        How do mutations in this gene cause the
                        disease?
                      </h1>
                      <form className="w-full">
                        <div className="mt-4">
                          <input type="radio" />
                          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                          <label htmlFor="1" className="ml-1 text-sm">
                            Mutation leads to a LOSS of function or
                            LOWER expression of gene or protein
                          </label>
                          <br />
                        </div>
                        <div className="mt-4">
                          <input type="radio" />
                          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                          <label htmlFor="2" className="ml-1 text-sm">
                            Mutation leads to a GAIN of function of
                            gene or protein
                          </label>
                          <br />
                        </div>
                        <div className="mt-4">
                          <input type="radio" />
                          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                          <label htmlFor="3" className="ml-1 text-sm">
                            Mutation leads to a MORE protein to be
                            produced
                          </label>
                          <br />
                        </div>
                        <div className="mt-4">
                          <input type="radio" />
                          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                          <label htmlFor="4" className="ml-1 text-sm">
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
                            src="/OPenGT Illustrations-14 1@2x.png"
                            width={300}
                            alt="mutationImage"
                          />
                        ) : null}
                      </div>
                      <p className="text-center text-sm text-gray-400 font-extralight">
                        Lorem ipsum, or lipsum as it is sometimes
                        known, is dummy text used in laying out print,
                        graphic or web designs.
                      </p>
                      <p className="text-center text-sm text-gray-400 font-extralight">
                        The passage is attributed to an unknown
                        typesetter in the 15th century who is thought
                        to have scrambled parts of Ciceros De.
                      </p>
                    </div>
                  </div>
                </>
              )}
              {showProteinForm && (
                <>
                  <div className="flex justify-between ">
                    <div className="w-3/5">
                      <h1 className="mt-6 text-2xl font-normal">
                        What is the size of the protein?
                      </h1>
                      <form className="w-full">
                        <div className="mt-4">
                          <input type="radio" />
                          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                          <label htmlFor="1" className="ml-1 text-sm">
                            1100 amino acids
                          </label>
                          <br />
                        </div>
                        <div className="mt-4">
                          <input type="radio" />
                          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                          <label htmlFor="2" className="ml-1 text-sm">
                            1100 amino acids
                          </label>
                          <br />
                        </div>
                        <div className="mt-4">
                          <input type="radio" />
                          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                          <label htmlFor="4" className="ml-1 text-sm">
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
                            src="/OPenGT Illustrations-13 6@2x.png"
                            width={300}
                            alt="proteinFormImage"
                          />
                        ) : null}
                      </div>
                      <p className="text-center text-sm text-gray-400 font-extralight">
                        Lorem ipsum, or lipsum as it is sometimes
                        known, is dummy text used in laying out print,
                        graphic or web designs.
                      </p>
                      <p className="text-center text-sm text-gray-400 font-extralight">
                        The passage is attributed to an unknown
                        typesetter in the 15th century who is thought
                        to have scrambled parts of Ciceros De.
                      </p>
                    </div>
                  </div>
                </>
              )}
              {!showProteinForm &&
                !showMutationForm &&
                !showBasicInfoForm &&
                (isShowEligibleSection ? (
                  <div className="flex justify-between ">
                    <div className="flex flex-col items-center w-3/5">
                      <img
                        src="/OPenGT Illustrations-15 1@2x.png"
                        width={300}
                        alt="proteinformImage"
                      />
                      <h1 className="font-semibold text-2xl mt-6">
                        SSMD may be eligible for a AAV based Gene
                        Therapy
                      </h1>
                      <p className="text-gray-400 font-extralight mt-6 text-sm text-center">
                        The results are fowarded to our science team
                        for further validation. They will reach out to
                        you to collect more gene and patient
                        information to confirm Gene therapy
                        feasibility. Beyond that it is critical that
                        the you partner with a qualified investigator
                        and institution to develop a roadmap for your
                        Gene therapy treatment.
                      </p>
                      <Button
                        label="Create a new program"
                        icon="+"
                        size="custom"
                        color="primary"
                        className="text-xs w-42 py-2 px-4 rounded text-white mt-6 focus:outline-none"
                        onClick={() => {
                          setShowEligibleSection(false);
                        }}
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
                        Lorem ipsum, or lipsum as it is sometimes
                        known, is dummy text used in laying out print,
                        graphic or web designs.
                      </p>
                      <p className="text-center text-sm text-gray-400 font-extralight">
                        The passage is attributed to an unknown
                        typesetter in the 15th century who is thought
                        to have scrambled parts of Ciceros De.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between ">
                    <div className="w-3/5 flex flex-col items-center">
                      <img
                        src="/OPenGT Illustrations-16 1@2x.png"
                        width={300}
                        alt="noteligibleImage"
                      />
                      <h1 className="font-semibold text-2xl mt-6">
                        SSMD is not eligible for AAV based Gene
                        Therapy
                      </h1>
                      <p className="text-gray-400 font-extralight mt-6 text-sm text-center">
                        You can still start a program, but we
                        recommend you reach out to our science team
                        for futher evaluation.
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
                        Lorem ipsum, or lipsum as it is sometimes
                        known, is dummy text used in laying out print,
                        graphic or web designs.
                      </p>
                      <p className="text-center text-sm text-gray-400 font-extralight">
                        The passage is attributed to an unknown
                        typesetter in the 15th century who is thought
                        to have scrambled parts of Ciceros De.
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default stepform;
