import localeMessageBox from '@/components/message-box/locale/en-US';
import localeLogin from '@/views/login/locale/en-US';

// 前台
import localeAbout from '@/views/web/about/locale/en-US';

// 后台
import localeWorkplace from '@/views/admin/dashboard/workplace/locale/en-US';
import localeTemplate from '@/views/admin/template/content/locale/en-US';
import localeSettings from './en-US/settings';

export default {
  'menu.dashboard': 'Dashboard',
  'menu.about': 'About',
  'menu.template': 'Template',
  'menu.server.dashboard': 'Dashboard-Server',
  'menu.server.workplace': 'Workplace-Server',
  'menu.server.monitor': 'Monitor-Server',
  'menu.list': 'List',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'menu.lifebus': 'Lifebus',
  'menu.faq': 'FAQ',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeAbout,
  ...localeWorkplace,
  ...localeTemplate,
};
