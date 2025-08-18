import React from 'react';
import { Dashboard } from './components';
import { DashboardProvider } from './context';

function App() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}

export default App;
