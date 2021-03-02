import { Icon } from 'components/Icon';
import React from 'react';
import styles from './proteinform.module.css';
import { Form, Input, Button, Checkbox } from 'antd';

function ProteinForm({
  setBasicInfo,
  setShowMutationForm,
  setShowProteinForm,
  setShowEligibleSection,
  showProteinForm,
}: any) {
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

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div className={styles['protein-form']}>
        <div style={{ width: '60%' }}>
          <h1>What is the size of the protein?</h1>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="1100 amino acids"
              htmlFor="less-amino"
              // className="ml-1 text-sm flex items-center"
              style={{
                marginLeft: ' 0.25rem',
                fontSize: 'small',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Input
                type="radio"
                id="less-amino"
                style={{ marginRight: '0.5rem' }}
              />
              <Icon
                name="chevron-left"
                className={styles['icon-left']}
              />
            </Form.Item>

            <Form.Item
              label="1100 mino acids"
              htmlFor="more-amino"
              style={{
                marginLeft: ' 0.25rem',
                fontSize: 'small',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Input
                type="radio"
                id="more-amino"
                style={{ marginRight: '0.5rem' }}
              />
              <Icon
                name="chevron-right"
                className={styles['arow-icon']}
              />{' '}
            </Form.Item>

            <Form.Item
              label="Dont Know"
              htmlFor="dont-know-btn"
              style={{
                marginLeft: ' 0.25rem',
                fontSize: 'small',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Input
                type="radio"
                id="dont-know-btn"
                style={{ marginRight: '0.5rem' }}
              />
            </Form.Item>

            <Form.Item
              style={{ display: 'flex', marginTop: '1rem' }}
              {...tailLayout}
            >
              <Button
                onClick={() => {
                  setShowProteinForm(false);
                  setBasicInfo(false);
                  setShowMutationForm(true);
                }}
              >
                Back
              </Button>

              <Button
                onClick={() => {
                  setBasicInfo(false);
                  setShowMutationForm(false);
                  setShowProteinForm(false);
                  setShowEligibleSection(true);
                }}
                style={{ marginLeft: '0.25rem' }}
              >
                Determine Feasibility
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={styles['protein-form-one']}>
          <div>
            {showProteinForm ? (
              <img
                src="/Illustrations13.png"
                width={300}
                alt="proteinFormImage"
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
}
export default ProteinForm;
