import Mock from 'mockjs';

import './user';
import './message-box';

import '@/views/admin/dashboard/workplace/mock';

Mock.setup({
  timeout: '600-1000',
});
