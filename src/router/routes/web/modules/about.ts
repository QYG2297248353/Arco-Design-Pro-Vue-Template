import { AppRouteRecordRaw } from '../../types';

const ABOUT: AppRouteRecordRaw = {
  path: 'about',
  name: 'about',
  meta: {
    locale: 'menu.about',
    requiresAuth: false,
    icon: 'icon-relation',
    order: 0,
  },
  component: () => import('@/views/web/about/index.vue'),
};
export default ABOUT;
