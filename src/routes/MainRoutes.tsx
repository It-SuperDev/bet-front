import { lazy } from 'react';

import Layout from 'layouts';
import Loadable from 'components/Loadable';

const Home = Loadable(lazy(() => import('../pages/player/Home')));
const Match = Loadable(lazy(() => import('../pages/player/Match')));
const Live = Loadable(lazy(() => import('../pages/player/Live')));
const Event = Loadable(lazy(() => import('../pages/player/Event')));
const BetList = Loadable(lazy(() => import('../pages/player/BetList')));

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
            path: 'bet_list',
            element: <BetList />
        },
        {
            path: 'event/:id',
            element: <Event />
        }
    ]
};

export default MainRoutes;
