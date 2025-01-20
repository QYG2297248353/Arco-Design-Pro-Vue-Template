import { RouteRecordRaw } from 'vue-router';
import { DEFAULT_LAYOUT_ADMIN, DEFAULT_LAYOUT_WEB } from './base';
import { appAdminRoutes } from './admin';
import { appWebRoutes } from './web';

// 前后台路由
const globalRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: DEFAULT_LAYOUT_WEB,
    meta: {
      requiresAuth: false,
    },
    children: [...appWebRoutes],
  },
  {
    path: '/admin',
    name: 'Admin',
    component: DEFAULT_LAYOUT_ADMIN,
    meta: {
      requiresAuth: true,
    },
    children: [...appAdminRoutes],
  },
];

export default globalRoutes;
