import { AppLayout } from 'components/AppLayout';
import Navbar from 'components/AppLayout/Navbar';
import React, { useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Button as AntButton, Button, Dropdown } from 'antd';
import styles from 'styles/dropdown.module.css';
import taskstyles from 'styles/taskdetail.module.css';
import dynamic from 'next/dynamic';
import { LetterPic } from 'components/LetterPic';
import { DropDown } from 'components/DropDown';
import OWNER_DATA from 'fixtures/dropdown.json';
import { Icon } from 'components/Icon';

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
                  className={styles['d-d']}
                  render={(item) => {
                    return (
                      <div
                        key={item.ownerName}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '1rem 0.5rem',
                          borderBottomColor: 'lightgray',
                          borderBottomWidth: '1',
                        }}
                      >
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
                      </div>
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
              <input id="files" type="file" />
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
              style={{
                display: 'flex',
                justifyContent: 'center',
                height: '120px',
              }}
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
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '2rem',
            }}
          >
            <h1
              style={{
                fontSize: 'large',
                fontWeight: 'bold',
                marginRight: '10px',
              }}
            >
              Connect with Service Providers
            </h1>
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
