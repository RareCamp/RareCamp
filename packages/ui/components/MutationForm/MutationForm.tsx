import React from 'react';
import styles from './mutation.module.css';
import { Form, Input, Button } from 'antd';

const MutationForm = ({
  setShowProteinForm,
  setBasicInfo,
  setShowMutationForm,
  setCurrent,
  showMutationForm,
}) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const Demo = () => {
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles['mutation-form']}>
      <div style={{ width: '60%' }}>
        <h1>How do mutations in this gene cause the disease?</h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={Demo}
          onFinishFailed={onFinishFailed}
        >
          <Input
            type="radio"
            id="protein-loss"
            style={{ marginRight: '0.5rem' }}
          />
          <Form.Item
            label="Mutation leads to a LOSS of function or LOWER expression
        of gene or protein"
            name="protein-loss"
            htmlFor="protein-loss"
            style={{
              marginLeft: ' 0.25rem',
              fontSize: 'small',
              display: 'flex',
              alignItems: 'center',
            }}
          ></Form.Item>
          <Input
            type="radio"
            id="more-protein-btn"
            style={{ marginRight: '0.5rem' }}
          />
          <Form.Item
            label=" Mutation leads to a GAIN of function of gene or protein"
            htmlFor="2"
            name="mutation-lead-btn"
            id="mutation-lead-btn"
            style={{
              marginLeft: ' 0.25rem',
              fontSize: 'small',
              display: 'flex',
              alignItems: 'center',
            }}
          ></Form.Item>
          <Input
            type="radio"
            id="dont-know-btn"
            // className="mr-2"
            style={{ marginRight: '0.5rem' }}
          />
          <Form.Item
            label="Dont Know"
            htmlFor="dont-know-btn"
            style={{
              marginLeft: ' 0.25rem',
              fontSize: 'small',
              display: 'flex',
              alignItems: 'center',
            }}
          ></Form.Item>

          <Form.Item
            style={{ display: 'flex', justifyContent: 'start' }}
            {...tailLayout}
          >
            <Button
              // label="Back"
              // type="primary"
              size="small"
              // className="block text-xs text-gray-400 focus:outline-none"
              onClick={() => {
                setShowProteinForm(false);
                setBasicInfo(true);
                setShowMutationForm(false);
                setCurrent(0);
              }}
            >
              Back
            </Button>
            <Button
              // label="Next"
              type="primary"
              size="small"
              style={{ marginLeft: '0.25rem' }}
              // className="block text-xs text-white focus:outline-none ml-1"
              onClick={() => {
                setShowProteinForm(true);
                setBasicInfo(false);
                setShowMutationForm(false);
                setCurrent(2);
              }}
            >
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles['mutation-form-one']}>
        <div>
          {showMutationForm ? (
            <img
              src="/Illustrations14.png"
              width={300}
              alt="mutationImage"
            />
          ) : null}
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
};

export default MutationForm;
