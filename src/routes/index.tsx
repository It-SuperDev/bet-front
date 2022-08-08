import { useRoutes, Navigate } from 'react-router-dom';

// routes
import { SportsRoutes, AuthRoutes } from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([{ path: '/', element: <Navigate to="/login" /> }, SportsRoutes, AuthRoutes]);
}
