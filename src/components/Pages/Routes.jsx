import Settings from './Body/About/Settings.jsx';
import Account from './Body/About/Account.jsx';
import About from './Body/About/About.jsx';
import Home from './Body/Home/Home.jsx';
import Analytics from './Body/Analytics/Analytics.jsx';
import Layout from './Layout';
import { Routes as RRoutes, Route, Navigate, useLocation } from 'react-router-dom';
import ProtectRoutes from './Auth/ProtectRoutes.jsx';
import UserAuth from './Auth/UserAuth.jsx';
import Profile from './Auth/Profile.jsx';
import GoalDetail from './Body/GoalDetail/GoalDetail.jsx';
import { useTour } from '@reactour/tour';
import { useEffect } from 'react';
import steps from '../../steps';

export default function Routes() {
    const location = useLocation();
    const { setSteps, setCurrentStep } = useTour();

    //this is how reactour redirects to a new page when highlighted area is clicked
    useEffect(() => {
        setCurrentStep(0);
        if (location.pathname === '/page-1') {
            setSteps([
                {
                    selector: '[data-tour="step-page"]',
                    content: 'text page'
                }
            ]);
        } else if (location.pathname === '/page-2') {
            setSteps([
                {
                    selector: '[data-tour="step-page-2"]',
                    content: 'text page 2'
                },
                {
                    selector: '[data-tour="step-page-3"]',
                    content: 'text page 3'
                }
            ]);
        } else {
            setSteps(steps);
        }
    }, [location.pathname, setCurrentStep, setSteps]);

    return (
        <RRoutes>
            <Route path="user/*" element={<UserAuth />} />
            <Route element={<Layout />}>
                <Route element={<ProtectRoutes />}>
                    <Route index element={<Home />} />
                    <Route path="analytics" element={<Analytics />} />
                    <Route path="goal/:id" element={<GoalDetail />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="account" element={<Account />} />
                    <Route path="about" element={<About />} />
                    <Route path="user/profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </RRoutes>
    );
}
