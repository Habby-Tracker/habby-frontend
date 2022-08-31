import { Link } from 'react-router-dom';

export default function Settings() {
    return (
        <div>
            <h1>Settings</h1>
            <Link to={'/account'}>Account</Link>
            <a href="/about-us">About Us</a>
        </div>
    );
}
