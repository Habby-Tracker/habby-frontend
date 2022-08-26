import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Pages/Routes.jsx';
import { Toaster } from 'react-hot-toast';
import UserProvider from './State/Context/UserContext.jsx';
import './App.css';
import CalendarProvider from './State/Context/CalendarContext.jsx';


export default function App() {
    return (
        <UserProvider>
            <CalendarProvider>
                <Toaster />
                <Router>
                    <Routes />
                </Router>
            </CalendarProvider>
        </UserProvider>
    );
}
