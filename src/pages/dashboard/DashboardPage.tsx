import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/">Sair</Link>
    </div>
  );
};

export default DashboardPage;
