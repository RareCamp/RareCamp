import { Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { AddButton, MainSection } from 'components/index-page';
import {
  dashboardColumns,
  dashboardData,
  diseaseColumns,
  diseaseData,
} from 'fixtures/dashboard';
import { ADD_SECTION } from 'constants/labels';

const dashboardCol: any = dashboardColumns;
const diseaseCol: any = diseaseColumns;

const Home = () => {
  return (
    <MainSection>
      <Table
        className="table-striped-rows"
        columns={dashboardCol}
        dataSource={dashboardData}
        bordered
        pagination={false}
      />
      <AddButton />
      <Table
        className="table-striped-rows"
        columns={diseaseCol}
        dataSource={diseaseData}
        bordered
        pagination={false}
      />
      <AddButton />
      <div>
        <button type="button" className="btnClass">
          <PlusOutlined />
          {ADD_SECTION}
        </button>
      </div>
    </MainSection>
  );
};

export default Home;
