import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Dashboard from '../pages/Dashboard.vue';
import Employees from '../pages/Employees.vue';
import TimeOff from '../pages/TimeOff.vue';
import Payroll from '../pages/Payroll.vue';
import Performance from '../pages/Performance.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/employees', name: 'Employees', component: Employees },
  { path: '/timeoff', name: 'TimeOff', component: TimeOff },
  { path: '/payroll', name: 'Payroll', component: Payroll },
  { path: '/performance', name: 'Performance', component: Performance },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
