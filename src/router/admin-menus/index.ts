import { appAdminRoutes, appAdminExternalRoutes } from '../routes/admin';

const mixinRoutes = [...appAdminRoutes, ...appAdminExternalRoutes];

const appClientMenus = mixinRoutes.map((el) => {
  const { name, path, meta, redirect, children } = el;
  return {
    name,
    path,
    meta,
    redirect,
    children,
  };
});

export default appClientMenus;
