import { Link } from 'react-router-dom';
import AuthSection from '../Body/Global/Section/AuthSection';
import Button from '../Body/Global/Button/Button.jsx';
import { InputControl } from '../Body/Global/Form/FormControls/FormControls';
import { useState } from 'react';

export default function AuthForm({ header, button, prompt, link, onSubmit }) {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(credentials.email, credentials.password);
    };

    const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

    return (
        <div className="flex absolute inset-0 justify-center items-center bg-gradient-to-br from-lightGrey to-lightOrange">
            <AuthSection width="90%" height="60%" maxWidth={'500px'} minHeight={'550px'}>
                <div className="flex flex-col items-center mt-20">
                    <div className="flex flex-row w-full items-end mb-10">
                        <p className="w-2/3 text-left text-2xl font-semibold">{header}</p>
                        <div className="w-1/3 text-right text-xs text-primaryOrange">
                            <Link to={link}>{prompt}</Link>
                        </div>
                    </div>
                    <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                        <div className="mb-10 w-full text-xs">
                            <InputControl
                                label="Email"
                                name="email"
                                type="email"
                                required
                                onChange={handleChange}
                                className="w-full h-8 text-base shadow-lg rounded-lg"
                            />
                        </div>
                        <div className="mb-10 w-full text-xs">
                            <InputControl
                                label="Password"
                                name="password"
                                type="password"
                                required
                                onChange={handleChange}
                                className="w-full h-8 text-base shadow-lg rounded-lg"
                            />                       
                        </div>
                        <div>
                            <Button text={button} width={'100%'} /> 
                        </div>
                    </form>
                </div>
            </AuthSection>
        </div>
    );
}
