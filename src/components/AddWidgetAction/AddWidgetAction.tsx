import { useState } from 'react';
import { useDashboard } from '../../hooks';
import { AddWidgetData } from '../../types/dashboard';
import { mockDataSets } from '../../utils/mock';
import { Modal } from '../index';

import './AddWidgetAction.css';

const DEFAULT_WIDGET_TYPE = 'barChart';

const AddWidgetAction = () => {
  const { handleAddBlock } = useDashboard();
  const [isOpen, setIsOpen] = useState(false);
  const [widgetType, setWidgetType] = useState(DEFAULT_WIDGET_TYPE);

  const handleSubmitNewWidget = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      type: formData.get('type'),
      name: formData.get('name'),
      description: formData.get('description'),
    };

    handleAddBlock(data as AddWidgetData);
    setIsOpen(false);
  };

  return (
    <div className="addWidgetActionContainer">
      <button className="addWidgetBtn" onClick={() => setIsOpen(true)}>
        Add new widget
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add new widget">
        <form className="addWidgetForm" onSubmit={handleSubmitNewWidget}>
          <div>
            <label htmlFor="type">Type</label>
            <select
              id="type"
              name="type"
              defaultValue={DEFAULT_WIDGET_TYPE}
              onChange={(e) => setWidgetType(e.target.value)}
            >
              <option value="barChart" label="Bar chart" />
              <option value="lineChart" label="Line chart" />
              <option value="text" label="Simple text block" />
            </select>
          </div>

          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter widget name"
              required={widgetType === 'text'}
              maxLength={50}
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter widget description"
              required={widgetType === 'text'}
              maxLength={widgetType !== 'text' ? 100 : 600}
              defaultValue={widgetType === 'text' ? mockDataSets.textBlocks : ''}
              rows={5}
            />
          </div>

          <button type="submit" className="addWidgetFormSubmit">Add</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddWidgetAction;
