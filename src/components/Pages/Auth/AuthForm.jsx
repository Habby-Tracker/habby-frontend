import { Link } from 'react-router-dom';
import AuthSection from '../Body/Global/Section/AuthSection';
import Button from '../Body/Global/Button/Button.jsx';
import { InputControl } from '../Body/Global/Form/FormControls/FormControls';
import { useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export default function AuthForm({ header, button, prompt, link, onSubmit }) {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(credentials.email, credentials.password);
    };

    const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

    return (
        <div className="flex absolute inset-0 justify-center items-center">
            <AuthSection width="90%" height="95%">
                <div className="flex border-2 border-neonGreen flex-col items-center">
                    <div className="flex border-2 border-darkOrange flex-row w-full items-end mb-10">
                        <p className="w-2/3 text-left text-2xl font-semibold">{header}</p>
                        <div className="w-1/3 text-right text-xs text-primaryOrange">
                            <Link to={link}>{prompt}</Link>
                        </div>
                    </div>
                    <form className="flex flex-col w-full justify-center place-items-stretch border-2 border-successGreen mb-10" onSubmit={handleSubmit}>
                        <div className="mb-10 w-full text-xs">
                            <InputControl
                                label="Email"
                                name="email"
                                type="email"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-10 w-full text-xs">
                            <InputControl
                                label="Password"
                                name="password"
                                type="password"
                                required
                                onChange={handleChange}
                            />                       
                        </div>
                        <div className="mb-10 w-full">
                            <CheckBoxOutlineBlankIcon />
                        </div>
                        <div>
                            <Button text={button}/> 
                        </div>
                    </form>
                </div>
            </AuthSection>
        </div>
    );
}
