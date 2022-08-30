import Button from '../Global/Button/Button.jsx';
import { InputControl } from '../Global/Form/FormControls/FormControls.jsx';

function handleSubmit(e) {
    e.preventDefault();
}
export default function Account() {
    return (
        <>
            <h1>Account</h1>
            <form>
                <InputControl label="First Name" name="{fname}" type="text" />
                <InputControl label="Last Name" name="{lname}" type="text" />
                <InputControl label="email" name="{email}" type="email" />
                <Button onClick={handleSubmit} text="Submit" />
            </form>
        </>
    );
}
