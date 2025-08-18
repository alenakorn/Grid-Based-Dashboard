import { useDashboard } from '../../hooks';
import { GridProps } from '../../types/dashboard';

import BarChartWidget from '../Widgets/BarChartWidget';
import LineChartWidget from '../Widgets/LineChartWidget';
import SimpleTextWidget from '../Widgets/SimpleTextWidget';

import './Grid.css';

const WidgetBlock = {
  lineChart: LineChartWidget,
  barChart: BarChartWidget,
  text: SimpleTextWidget,
};

const Grid = ({ columns, items }: GridProps) => {
  const { removeBlock } = useDashboard();

  return (
    <div className="gridContainer" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {items?.map((item) => {
        const WidgetComponent = WidgetBlock[item.type];
        return (
          <div className="gridItem" key={item.id}>
            <button className="gridItemDeleteBtn" onClick={() => removeBlock(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                <path
                  className="cls-1"
                  d="M20.5 4h-3.64l-.69-2.06a1.37 1.37 0 0 0-1.3-.94h-4.74a1.37 1.37 0 0 0-1.3.94L8.14 4H4.5a.5.5 0 0 0 0 1h.34l1 17.59A1.45 1.45 0 0 0 7.2 24h10.6a1.45 1.45 0 0 0 1.41-1.41L20.16 5h.34a.5.5 0 0 0 0-1zM9.77 2.26a.38.38 0 0 1 .36-.26h4.74a.38.38 0 0 1 .36.26L15.81 4H9.19zm8.44 20.27a.45.45 0 0 1-.41.47H7.2a.45.45 0 0 1-.41-.47L5.84 5h13.32z"/>
                <path
                  className="cls-1"
                  d="M9.5 10a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5zM12.5 9a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5zM15.5 10a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5z"/>
              </svg>
            </button>
            <WidgetComponent {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;

