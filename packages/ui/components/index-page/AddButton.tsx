import { PlusOutlined } from '@ant-design/icons';
import { ADD_TASK } from 'constants/labels';

const AddButton = () => {
  return (
    <div className="btnContainer">
      <button type="button" className="btnClass">
        <PlusOutlined />
        {ADD_TASK}
      </button>
    </div>
  );
};

export default AddButton;
