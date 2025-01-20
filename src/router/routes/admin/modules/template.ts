import { AppRouteRecordRaw } from '../../types';

const TEMPLATE: AppRouteRecordRaw = {
  path: 'template',
  name: 'template',
  meta: {
    locale: 'menu.template',
    requiresAuth: true,
    icon: 'icon-layers',
    order: 1,
  },
  children: [
    {
      path: 'content',
      name: 'templateContent',
      component: () => import('@/views/admin/template/content/index.vue'),
      meta: {
        locale: 'menu.template.content',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default TEMPLATE;
