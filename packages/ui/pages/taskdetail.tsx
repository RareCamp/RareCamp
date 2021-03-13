import { AppLayout } from 'components/AppLayout';
import React, { useState, useRef } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Button as AntButton, Button, Dropdown } from 'antd';
import taskstyles from 'styles/taskdetail.module.css';
import dynamic from 'next/dynamic';
import { LetterPic } from 'components/LetterPic';
import { DropDown } from 'components/DropDown';
import OWNER_DATA from 'fixtures/dropdown.json';

const DynamicComponent = dynamic(
  () => import('../components/Editor'),
  { ssr: false },
);
const USER_NAME = 'Ramya';

const Taskdetail = () => {
  const [isEditProgramModalOpen, setEditProgramModalOpen] = useState(
    false,
  );
  const [
    isAccountSettingModalOpen,
    setAccountSettingModalOpen,
  ] = useState(false);

  const [open, setOpenDropDown] = useState(false);
  const [isUserDropDownOpen, setUserDropDown] = useState(false);
  const [file, selectedFile] = useState('');
  // Create a reference to the hidden file input element
  const hiddenFileInput: any = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded, 'si');
    selectedFile(fileUploaded);
  };
  return (
    <AppLayout>
      <section className={taskstyles['taskdetail--wrapper']}>
        <div className={taskstyles['taskdetail--wrapper--divOne']}>
          <h1>Understand knock-in mouse model</h1>
          <AntButton onClick={() => {}} icon={<MoreOutlined />} />
        </div>
        <p style={{ color: 'lightgray' }}>
          This task is to gain an understanding of what knock-in mouse
          model is, the high level process to design and build and the
          cost/time it takes to develop a model. Please work with an
          expert to determine if this is the right model for you.
        </p>
      </section>
      <section
        className={taskstyles['taskdetail--wrapper--sectionOne']}
      >
        <div className={taskstyles['taskdetail--wrapper--divTwo']}>
          <div
            className={taskstyles['taskdetail--wrapper--divThree']}
          >
            <div
              className={taskstyles['taskdetail--wrapper--divFour']}
            >
              <span>Status</span>
              <span
                className={taskstyles['taskdetail--wrapper--span']}
              >
                In Progress
              </span>
            </div>
            <div
              className={taskstyles['taskdetail--wrapper--divFive']}
            >
              <span>Owner</span>
              <span
                className={taskstyles['taskdetail-wrapper-spanTwo']}
              >
                <LetterPic letter="R" size="sm" />{' '}
                <span style={{ marginLeft: '4px' }}>Ramya</span>
                <span>
                  {isUserDropDownOpen ? (
                    <svg
                      onClick={() =>
                        setUserDropDown(!isUserDropDownOpen)
                      }
                      style={{ width: '25px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={() =>
                        setUserDropDown(!isUserDropDownOpen)
                      }
                      style={{ width: '25px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </span>
              {isUserDropDownOpen && (
                <DropDown
                  data={OWNER_DATA}
                  render={(item) => {
                    return (
                      <li key={item.ownerName}>
                        <LetterPic
                          letter={item.letter}
                          color={item.bgColor}
                          className=""
                          size="md"
                          textColor={item.letterColor}
                        />
                        <div
                          className={
                            taskstyles['taskdetail--wrapper--divSix']
                          }
                        >
                          <span
                            className={
                              taskstyles[
                                'taskdetail--wrapper--spanThree'
                              ]
                            }
                          >
                            {item.ownerName}
                          </span>
                          <span
                            className={
                              taskstyles[
                                'taskdetail--wrapper--spanFour'
                              ]
                            }
                          >
                            {item.ownerEmail}
                          </span>
                        </div>
                      </li>
                    );
                  }}
                />
              )}
            </div>

            <div
              className={taskstyles['taskdetail--wrapper--divSeven']}
            >
              <span>Budget</span>
              <span>$0</span>
            </div>
            <div
              className={taskstyles['taskdetail--wrapper--divSeven']}
            >
              <span>Start Date</span>
              <span>12/05/2020</span>
            </div>
            <div
              className={taskstyles['taskdetail--wrapper--divSeven']}
            >
              <span>End Date</span>
              <span>12/05/2020</span>
            </div>
          </div>
          <div>
            <DynamicComponent />
            <div style={{ marginTop: '30px' }}>
              <Button onClick={handleClick}>Upload a file</Button>
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
              />
              <p>{file}</p>
            </div>
          </div>
        </div>
        <div style={{ width: '40%', marginLeft: '20px' }}>
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '2rem',
              marginBottom: '20px',
            }}
          >
            <h1
              style={{
                fontSize: 'large',
                fontWeight: 'bold',
              }}
            >
              About knoc-in mouse models
            </h1>
            <div
              className={taskstyles['taskdetail--wrapper--divEight']}
            >
              <img
                src="/Group307@2x.png"
                style={{ height: '300px' }}
              />
            </div>
            <p>
              A knock-in mouse defines an animal model in which a gene
              sequence of interest is altered by one-for-one
              substitution with a transgene, or by adding gene
              sequences that are not found within the locus.{' '}
              <a>Read more</a>
            </p>
          </div>
          <div className={taskstyles['taskdetail--wrapper--divNine']}>
            <h1>Connect with Service Providers</h1>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <img src="/image6@3x.png" width={100} />
                <div
                  className={
                    taskstyles['taskdetail--wrapper--divSeven']
                  }
                >
                  <span>Charles River</span>
                  <span>Biotech Services</span>
                </div>
                <Button
                  style={{ border: '1px solid blue', color: 'blue' }}
                >
                  Invite
                </Button>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <img src="/image5@3x.png" width={100} />
                <div
                  className={
                    taskstyles['taskdetail--wrapper--divSeven']
                  }
                >
                  <span>Cyagen</span>
                  <span>Biotech Services</span>
                </div>

                <Button
                  style={{ border: '1px solid blue', color: 'blue' }}
                >
                  Invite
                </Button>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <img src="/image1@3x.png" width={100} />
                <div
                  className={
                    taskstyles['taskdetail--wrapper--divSeven']
                  }
                >
                  <span>Jacksons Lab</span>
                  <span>Biotech Services</span>
                </div>
                <Button
                  style={{ border: '1px solid blue', color: 'blue' }}
                >
                  Invite
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Taskdetail;
