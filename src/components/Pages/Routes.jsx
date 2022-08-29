import About from './Body/About/About.jsx';
import Home from './Body/Home/Home.jsx';
import Analytics from './Body/Analytics/Analytics.jsx';
import Layout from './Layout';
import { Routes as RRoutes, Route, Navigate } from 'react-router-dom';
import ProtectRoutes from './Auth/ProtectRoutes.jsx';
import UserAuth from './Auth/UserAuth.jsx';
import Profile from './Auth/Profile.jsx';

export default function Routes() {
    return (
        <RRoutes>
            <Route path="user/*" element={<UserAuth />} />
            <Route element={<Layout />}>
                <Route element={<ProtectRoutes />}>
                    <Route index element={<Home />} />
                    <Route path="analytics" element={<Analytics />} />
                    <Route path="settings" element={<About />} />
                    <Route path="user/profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </RRoutes>
    );
}
