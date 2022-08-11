import { useRoutes, Navigate } from 'react-router-dom';

// routes
import { SportsRoutes, AuthRoutes, AdminRoutes } from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([{ path: '/', element: <Navigate to="/login" /> }, SportsRoutes, AuthRoutes, AdminRoutes]);
}
