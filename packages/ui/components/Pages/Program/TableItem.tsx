import { LetterPic } from 'components/LetterPic';
import styles from 'styles/program.module.css';

export type TableDataItems = {
  name: string;
  status: string;
  owner: string;
  budget: string;
  duration: string;
  startDate: string;
  endDate: string;
};
type TableItemProps = {
  item: TableDataItems;
};

const TableItem = ({ item }: TableItemProps) => {
  return (
    <tr key={item.name} className={styles['table-item']}>
      <td>{item.name}</td>
      <td>
        <div className={styles[`status-${item.status}`]}>
          {item.status}
        </div>
      </td>
      {item.owner !== '' ? (
        <td className="p-2 flex items-center">
          <LetterPic letter={item.owner[0]} />
          {item.owner}
        </td>
      ) : (
        <td />
      )}
      <td>{item.budget}</td>

      <td>{item.duration ? item.duration : <span />}</td>
      <td>
        {item.startDate ? (
          <input type="date" className="focus:outline-none" />
        ) : (
          <input type="date" placeholder="select date" />
        )}
      </td>
      <td>
        {item.endDate ? (
          <input type="date" className="focus:outline-none" />
        ) : (
          <p>
            <input type="date" placeholder="select date" />
          </p>
        )}
      </td>
    </tr>
  );
};

export default TableItem;
