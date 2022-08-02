import { lazy } from 'react';

import Layout from 'layouts';
import Loadable from 'components/Loadable';

const Home = Loadable(lazy(() => import('../pages/user/Home')));
const Match = Loadable(lazy(() => import('../pages/user/Match')));

const MainRoutes = {
    path: '/sports',
    element: <Layout />,
    children: [
        {
            path: 'home',
            element: <Home />
        },
        {
            path: 'match',
            element: <Match />
        }
    ]
};

export default MainRoutes;
