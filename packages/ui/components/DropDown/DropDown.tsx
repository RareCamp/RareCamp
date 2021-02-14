import styles from 'styles/dropdown.module.css';

const DropDown = ({ data, render, className }: any) => (
  <div>
    <ul className={`${styles['drop-down']} ${className}`}>
      {data.map((d) => render(d))}
    </ul>
  </div>
);

export default DropDown;
