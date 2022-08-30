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
        <AuthSection width="100%" height="100%">
            <div className="flex flex-row">
                <p>{header}</p>
                <Link to={link}>{prompt}</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <InputControl
                    label="Email"
                    name="email"
                    type="email"
                    required
                    onChange={handleChange}
                />
                <InputControl
                    label="Password"
                    name="password"
                    type="password"
                    required
                    onChange={handleChange}
                />

                <Button text={button} marginTop={'20px'}/>

            </form>
        </AuthSection>
    );
}
