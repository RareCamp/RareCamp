import React from "react";
import { Col, Layout, Row } from "antd";
import styled from "styled-components";

const StyledLayout = styled(Layout)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3e3465;
  min-height: 100vh;
  overflow: auto;

  .content-row {
    width: 900px;
    height: 610px;
    border-radius: 8px;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.04);
    background-color: #ffffff;

    .form-column {
      display: flex;
      justify-content: center;
      align-items: center;

      .auth-form {
        width: 327px;
        display: flex;
        flex-direction: column;
        justify-content: space-between
      }
    }

    .illustration-column {
      background-size: cover;
      background-image: url('../OPenGT_Illustrations-signup.png');

      .headline {
        color: #3e3465;
        font-size: 30px;
        font-weight: 400;
        width: 245px;
        top: 120px;
        left: 60px;
        position: absolute;
      }
    }
  }
`;

export default function AuthLayout(props) {
  return <StyledLayout className="layout-container">
    <Row className="content-row">
      <Col span={12} className="form-column">
        <div className="auth-form">
          <img src="/openGT_LOGO.png" width="207px" alt="infoImage" />
          {props.children}
        </div>
      </Col>
      <Col span={12} className="illustration-column">
        <span className="headline">Own the roadmap to your future</span>
      </Col>
    </Row>
  </StyledLayout>;
}

