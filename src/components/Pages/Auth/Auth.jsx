import { Route, Routes } from 'react-router-dom';
import AuthForm from './AuthForm';
import { useAuthActions } from '../../../State/Hooks/user';
import SignUpForm from './SignUpForm';


export default function Auth() {
    const { signIn, signUp } = useAuthActions();
    
    const signInData = {
        header: 'Sign in to your account',
        button: 'Sign In',
        prompt: 'Need to create an account?',
        link: 'sign-up',
        onSubmit: signIn
    };
    
    const signUpData = {
        header: 'Create a new account',
        button: 'Sign Up',
        prompt: 'Already have an account?',
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

