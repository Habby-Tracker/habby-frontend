import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Pages/Routes.jsx';
import { Toaster } from 'react-hot-toast';
import UserProvider from './State/Context/UserContext.jsx';
import './App.css';
import CalendarProvider from './State/Context/CalendarContext.jsx';
import DataContextProvider from './State/Context/DataContext.jsx';
// import { useState } from 'react';
// import { TourProvider } from '@reactour/tour';


// const steps = [
//     {
//         selector: '[data-tour=\'date slider\']',
//         content: (
//             <p>
//           This is a <code>date slider</code> on the Home page
//             </p>
//         )
//     },
//     {
//         selector: '[data-tour=\'progress ring\']',
//         content: (
//             <p>
//           This is a <code>progress ring</code> on the Home page
//             </p>
//         )
//     }
// ];

export default function App() {
    // const redirect = useNavigate();
    // const [step, setStep] = useState(0);

    // const setCurrentStep = (step) => {
    //     switch (step) {
    //         case 0:
    //             redirect('/', true);
    //             break;
    //         case 1:
    //             redirect('/Example', true);
    //             break;
    //         default:
    //             break;
    //     }
    //     setStep(step);
    // };

    return (
        // <TourProvider
        //     steps={steps}
        //     currentStep={step}
        //     setCurrentStep={setCurrentStep}
        // >
        <UserProvider>
            <DataContextProvider>
                <CalendarProvider>
                    <Toaster />
                    <Router>
                        <Routes />
                    </Router>
                </CalendarProvider>
            </DataContextProvider>
        </UserProvider>
        // </TourProvider>

    );
}
