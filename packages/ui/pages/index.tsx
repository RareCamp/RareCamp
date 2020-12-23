import {
  MainSection,
  SectionHeader,
  TableItem,
} from 'components/Pages/Program';
import { Button } from 'components/Button';

import records from 'fixtures/dashboard.json';
import { HOME_TABLE_HEADINGS } from 'constants/lists';
import { ADD_TASK } from 'constants/labels';

import styles from 'styles/program.module.css';

const Home = () => {
  return (
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
          <tbody key={record.id}>
            <SectionHeader
              title={record.title}
              description={record.description}
            />
            {record.items.map((item) => (
              <TableItem item={item} key={item.name} />
            ))}
            <Button
              onClick={() => {}}
              icon={<span className="mr-2">+</span>}
              label={ADD_TASK}
            />
          </tbody>
        ))}
      </table>
    </MainSection>
  );
};

export default Home;
