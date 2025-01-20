import { appWebRoutes, appWebExternalRoutes } from '../routes/web';

const mixinRoutes = [...appWebRoutes, ...appWebExternalRoutes];

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
