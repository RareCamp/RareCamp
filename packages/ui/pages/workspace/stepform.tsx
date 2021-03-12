import React, { useState } from 'react';
import { AppLayout } from 'components/AppLayout';
import { Icon } from 'components/Icon';
import { LetterPic } from 'components/LetterPic';
import Link from 'next/link';
import { BasicInfoForm } from 'components/BasicInfoForm';
import { MutationForm } from 'components/MutationForm';
import { ProteinForm } from 'components/ProteinForm';
import { EligibleSection } from 'components/EligibleSection';
import { NotEligibleSection } from 'components/NotEligibleSection';
import styles from 'styles/workspace.module.css';

const stepform = () => {
  const [showBasicInfoForm, setBasicInfo] = useState(true);
  const [showMutationForm, setShowMutationForm] = useState(false);
  const [showProteinForm, setShowProteinForm] = useState(false);
  const [isShowEligibleSection, setShowEligibleSection] = useState(
    false,
  );

  return (
    <AppLayout>
      <div className="bg-gray-300 h-screen flex flex-col">
        <div className="flex bg-white border-b py-4 border-gray-200 w-full px-6">
          <h1 className="font-semibold">WorkSpace</h1>
        </div>
        <div>
          <div className={styles.infoContainer}>
            <div className="flex items-center justify-between px-4">
              <Link href="/workspace">
                <span className="w-4 cursor-pointer">
                  <Icon name="arrowleft" className={styles.icon} />
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
                <BasicInfoForm
                  setShowMutationForm={setShowMutationForm}
                  setShowProteinForm={setShowProteinForm}
                  setBasicInfo={setBasicInfo}
                  showBasicInfoForm={showBasicInfoForm}
                />
              )}

              {showMutationForm && (
                <MutationForm
                  setShowProteinForm={setShowProteinForm}
                  setBasicInfo={setBasicInfo}
                  setShowMutationForm={setShowMutationForm}
                  showMutationForm={showMutationForm}
                />
              )}
              {showProteinForm && (
                <ProteinForm
                  setBasicInfo={setBasicInfo}
                  setShowMutationForm={setShowMutationForm}
                  setShowProteinForm={setShowProteinForm}
                  setShowEligibleSection={setShowEligibleSection}
                  showProteinForm={showProteinForm}
                />
              )}
              {!showProteinForm &&
                !showMutationForm &&
                !showBasicInfoForm &&
                (isShowEligibleSection ? (
                  <EligibleSection
                    setShowEligibleSection={setShowEligibleSection}
                    isShowEligibleSection={isShowEligibleSection}
                  />
                ) : (
                  <NotEligibleSection
                    isShowEligibleSection={isShowEligibleSection}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default stepform;
