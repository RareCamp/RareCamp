import { AppLayout } from 'components/AppLayout';
import Navbar from 'components/AppLayout/Navbar';
import React, { useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Button as AntButton, Button } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const USER_NAME = 'Ramya';

const Taskdetail = () => {
  const [isEditProgramModalOpen, setEditProgramModalOpen] = useState(
    false,
  );
  const [
    isAccountSettingModalOpen,
    setAccountSettingModalOpen,
  ] = useState(false);
  const textDefault =
    'Understand if a knock in mouse model is necessary for your disease. It typically takes 9-12 months to develop a new knock-in model. You will need an expert to design the mouse model and then work with a lab to generate the model.Use this space to document your conversations, thoughts and bookmark links you can later refer back to.';
  const [text, setText] = useState(textDefault);
  const handleChange = (value: string) => {
    setText(value);
  };
  return (
    <AppLayout>
      {/* <Navbar
        setEditProgramModalOpen={setEditProgramModalOpen}
        setAccountSettingModalOpen={setAccountSettingModalOpen}
        username={USER_NAME}
      /> */}

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          padding: '1rem 2.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1
            style={{
              fontSize: 'large',
              fontWeight: 'bold',
              marginRight: '10px',
            }}
          >
            Understand knock-in mouse model
          </h1>
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
        style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: '60%',

            backgroundColor: '#ffffff',
            padding: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>Status</span>
              <span>In Progress</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>Owner</span>
              <span>Ramya</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>Budget</span>
              <span>$0</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>Start Date</span>
              <span>12/05/2020</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>End Date</span>
              <span>12/05/2020</span>
            </div>
          </div>
          <div>
            <ReactQuill
              value={text}
              style={{ marginTop: '30px', height: '35vh' }}
              onChange={handleChange}
            />
            <input style={{ marginTop: '120px' }} type="file" />
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
                  style={{ display: 'flex', flexDirection: 'column' }}
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
                  style={{ display: 'flex', flexDirection: 'column' }}
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
                  style={{ display: 'flex', flexDirection: 'column' }}
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
