import { lazy } from 'react';

import { MainLayout, FullLayout, AdminLayout } from 'layouts';
import Loadable from 'components/Loadable';

const Home = Loadable(lazy(() => import('../pages/player/Home')));
const Match = Loadable(lazy(() => import('../pages/player/Match')));
const Live = Loadable(lazy(() => import('../pages/player/Live')));
const Event = Loadable(lazy(() => import('../pages/player/Event')));
const BetList = Loadable(lazy(() => import('../pages/player/BetList')));

const Login = Loadable(lazy(() => import('../pages/auth/Login')));

const Users = Loadable(lazy(() => import('../pages/admin/Users')));
const ManageBetList = Loadable(lazy(() => import('../pages/admin/BetList')));
const Transaction = Loadable(lazy(() => import('../pages/admin/Transaction')));
const CreateAccount = Loadable(lazy(() => import('../pages/admin/CreateAccount')));
const Setting = Loadable(lazy(() => import('../pages/admin/Setting')));

export const SportsRoutes = {
    path: '/sports',
    element: <MainLayout />,
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
            path: 'bet-list',
            element: <BetList />
        },
        {
            path: 'event/:id',
            element: <Event />
        }
    ]
};

export const AuthRoutes = {
    path: '/',
    element: <FullLayout />,
    children: [
        {
            path: '/login',
            element: <Login />
        }
    ]
}

export const AdminRoutes = {
    path: '/admin',
    element: <AdminLayout />,
    children: [
        {
            path: 'users',
            element: <Users />
        },
        {
            path: 'bet-list',
            element: <ManageBetList />
        },
        {
            path: 'transaction',
            element: <Transaction />
        },
        {
            path: 'create-account',
            element: <CreateAccount />
        },
        {
            path: 'setting',
            element: <Setting />
        }
    ]
}