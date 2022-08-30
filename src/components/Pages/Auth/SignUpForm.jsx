import { Link } from 'react-router-dom';
import Section from '../Body/Global/Section/Section.jsx';
import Button from '../Body/Global/Button/Button.jsx';
import { InputControl } from '../Body/Global/Form/FormControls/FormControls';
import { useState } from 'react';

export default function AuthForm({ header, button, prompt, link, onSubmit }) {
    const [credentials, setCredentials] = useState({ firstName: '', lastName: '', email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(credentials.firstName, credentials.lastName, credentials.email, credentials.password);
    };

    const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

    return (
        <Section header={header} width="40vw">
            <form onSubmit={handleSubmit}>
                <InputControl
                    label="First Name"
                    name="first_name"
                    type="first_name"
                    required
                    placeholder="first name"
                    onChange={handleChange}
                />
                <InputControl
                    label="Last Name"
                    name="last_name"
                    type="last_name"
                    required
                    placeholder="last name"
                    onChange={handleChange}
                />
                <InputControl
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="email"
                    onChange={handleChange}
                />
                <InputControl
                    label="Password"
                    name="password"
                    type="password"
                    required
                    placeholder="password"
                    onChange={handleChange}
                />

                <Button text={button} marginTop={'20px'}/>

                <Link to={link}>{prompt}</Link>
            </form>
        </Section>
    );
}
