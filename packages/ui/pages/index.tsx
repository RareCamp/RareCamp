import { MainSection, TaskSection } from 'components/Pages/Program';
import Navbar from 'components/AppLayout/Navbar';
import { AppLayout } from 'components/AppLayout';
import records from 'fixtures/dashboard.json';
import { HOME_TABLE_HEADINGS } from 'constants/lists';
import styles from 'styles/program.module.css';

const USER_NAME = 'Ramya';
const Home = () => {
  return (
    <AppLayout>
      <Navbar username={USER_NAME} />
      <MainSection>
        <table>
          <thead>
            <tr className={styles['table-header']}>
              {HOME_TABLE_HEADINGS.map((heading) => (
                <th key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          {records.map((record) => (
            <TaskSection record={record} key={record.title} />
          ))}
        </table>
      </MainSection>
    </AppLayout>
  );
};

export default Home;
