import { Link } from 'react-router-dom';
import AuthSection from '../Body/Global/Section/AuthSection';
import Button from '../Body/Global/Button/Button.jsx';
import { InputControl } from '../Body/Global/Form/FormControls/FormControls';
import { useState } from 'react';

export default function SignUpForm({ header, button, prompt, link, onSubmit }) {
    const [credentials, setCredentials] = useState({ firstName: '', lastName: '', email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(credentials.firstName, credentials.lastName, credentials.email, credentials.password);
    };

    const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

    return (
        <div className="flex absolute inset-0 justify-center items-center">
            <AuthSection width="90%" height="95%">
                <div className="flex flex-col items-center">
                    <div className="flex flex-row w-full items-end mb-10">
                        <p className="w-2/3 text-left text-2xl font-semibold">{header}</p>
                        <div className="w-1/3 text-right text-xs text-primaryOrange">
                            <Link to={link}>{prompt}</Link>
                        </div>
                    </div>
                    <form className="flex flex-col w-full justify-center place-items-stretch mb-10" onSubmit={handleSubmit}>
                        <div className="mb-10 w-full text-xs">
                            <InputControl
                                label="First Name"
                                name="first_name"
                                type="first_name"
                                required
                                onChange={handleChange}
                                className="w-full"
                            />
                        </div>
                        <div className="mb-10 w-full text-xs">
                            <InputControl
                                label="Last Name"
                                name="last_name"
                                type="last_name"
                                required
                                onChange={handleChange}
                                className="w-full"
                            />
                        </div>
                        <div className="mb-10 w-full text-xs">
                            <InputControl
                                label="Email"
                                name="email"
                                type="email"
                                required
                                onChange={handleChange}
                                className="w-full"
                            />
                        </div>
                        <div className="mb-10 w-full text-xs">
                            <InputControl
                                label="Password"
                                name="password"
                                type="password"
                                required
                                onChange={handleChange}
                                className="w-full"
                            />                       
                        </div>
                        <div>
                            <Button text={button} width={'100%'}/> 
                        </div>
                    </form>
                </div>
            </AuthSection>
        </div>
    );
}
