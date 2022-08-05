import { lazy } from 'react';

import Layout from 'layouts';
import Loadable from 'components/Loadable';

const Home = Loadable(lazy(() => import('../pages/user/Home')));
const Match = Loadable(lazy(() => import('../pages/user/Match')));
const Live = Loadable(lazy(() => import('../pages/user/Live')));
const Event = Loadable(lazy(() => import('../pages/user/Event')));

const MainRoutes = {
    path: '/sports',
    element: <Layout />,
    children: [
        {
            path: 'home',
            element: <Home />
        },
        {
            path: 'live',
            element: <Live />
        },
        {
            path: 'match',
            element: <Match />
        },
        {
            path: 'event/:id',
            element: <Event />
        }
    ]
};

export default MainRoutes;
