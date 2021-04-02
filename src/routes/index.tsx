import React from 'react';

export interface RoutesModel {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<unknown>>;
  title: string;
}

export const AppRoutes: Array<RoutesModel> = [
  {
    path: '/',
    component: React.lazy(() => import('./../pages/home/HomePage')),
    title: 'Início',
  },
  {
    path: '/dashboard',
    component: React.lazy(() => import('./../pages/dashboard/DashboardPage')),
    title: 'Dashboard',
  },
];
