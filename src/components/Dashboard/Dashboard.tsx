import { AddWidgetAction, DraggableGrid } from '../index';

import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <h1 className="dashboardTitle">Grid-Based Dashboard</h1>
      <AddWidgetAction />
      <DraggableGrid />
    </div>
  );
};

export default Dashboard;

