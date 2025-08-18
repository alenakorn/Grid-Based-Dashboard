import './Dashboard.css';
import { useDashboard } from '../../hooks';
import { AddWidgetAction, Grid } from '../index';

const Dashboard = () => {
  const { blocks, gridSize } = useDashboard();

  return (
    <div className="dashboardContainer">
      <h1>Dashboard</h1>
      <AddWidgetAction />
      <Grid items={blocks} columns={gridSize.cols} />
    </div>
  );
};

export default Dashboard;

