import './Dashboard.css';
import { AddWidgetAction, DraggableGrid } from '../index';

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <h1>Dashboard</h1>
      <AddWidgetAction />
      <DraggableGrid />
    </div>
  );
};

export default Dashboard;

