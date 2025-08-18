import { useState } from 'react';
import { useDashboard } from '../../hooks';
import { AddWidgetData } from '../../types/dashboard';
import { Modal } from '../index';

import './AddWidgetAction.css';

const AddWidgetAction = () => {
  const { addBlock } = useDashboard();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmitNewWidget = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      type: formData.get('type'),
      name: formData.get('name'),
      description: formData.get('description'),
    };

    await addBlock(data as AddWidgetData);
    setIsOpen(false);
  };

  return (
    <div className="addWidgetActionContainer">
      <button className="addWidgetBtn" onClick={() => setIsOpen(true)}>Add new widget</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add new widget">
        <form className="addWidgetForm" onSubmit={handleSubmitNewWidget}>
          <select name="type">
            <option value="barChart" label="Bar chart" selected/>
            <option value="lineChart" label="Line chart"/>
            <option value="text" label="Simple text block"/>
          </select>
          <input name="name" type="text" placeholder="Widget name" />
          <input name="description" type="text" placeholder="Widget description" />
          <button type="submit" className="addWidgetFormSubmit">Add</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddWidgetAction;
