import { Link } from 'react-router-dom';

export default function Navigation({ navigation }) {
    return (
        <nav>
            {navigation.map(({ to, label }) => (
                <Link key={to} to={to}>
                    {label}
                </Link>
            ))}
        </nav>
    );
}

