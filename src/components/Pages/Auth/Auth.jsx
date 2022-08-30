import { Route, Routes } from 'react-router-dom';
import AuthForm from './AuthForm';
import { useAuthActions } from '../../../State/Hooks/user';
import SignUpForm from './SignUpForm';


export default function Auth() {
    const { signIn, signUp } = useAuthActions();
    
    const signInData = {
        header: 'Log In',
        button: 'Log In',
        prompt: 'Sign Up  〉',
        link: 'sign-up',
        onSubmit: signIn
    };
    
    const signUpData = {
        header: 'Sign Up',
        button: 'Sign Up',
        prompt: 'Log In  〉',
        link: '../',
        onSubmit: signUp
    };

    return (
        <section>
            <Routes>
                <Route index element={<AuthForm {...signInData} />} />
                <Route path="sign-up" element={<SignUpForm {...signUpData} />} />
            </Routes>
        </section>
    );
}

