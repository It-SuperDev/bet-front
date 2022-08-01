import { lazy } from 'react';

import Layout from 'layouts';
import Loadable from 'components/Loadable';

const Home = Loadable(lazy(() => import('../pages/user/Home')));

const MainRoutes = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/sports',
            element: <Home />
        }
    ]
};

export default MainRoutes;
