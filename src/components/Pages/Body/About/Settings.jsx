import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Settings() {
    

    return (
        <div className="flex flex-col min-w-full">
            <h1 className="text-purple text-bold text-3xl flex justify-start px-6">Settings</h1>
            
            <Link to={'/account'}>
                <section className="container flex items-start justify-between bg-lightGrey
        py-2 px-4 rounded shadow-lg my-3 w-full hover:bg-lightOrange hover:cursor-pointer">
                Account
                    <ArrowForwardIosIcon />
                </section>
            </Link>
            <Link to={'/about'}>
                <section className="container flex items-start justify-between bg-lightGrey
        py-2 px-4 rounded shadow-lg my-3 w-full hover:bg-lightOrange hover:cursor-pointer">
                About Us
                    <ArrowForwardIosIcon />
                </section>
            </Link>
        </div>
    );
}
