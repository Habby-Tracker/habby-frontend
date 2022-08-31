import Button from '../Global/Button/Button.jsx';
import { InputControl } from '../Global/Form/FormControls/FormControls.jsx';
import { useState } from 'react';
import { useUser, useAuthActions } from '../../../../State/Hooks/user';

export default function Account() {
    const { user } = useUser();
    const { update } = useAuthActions();

    const [userInForm, setUserInForm] = useState(user);

    function handleSubmit(e) {
        e.preventDefault();
        update(userInForm);
    }
    return (
        <>
            <h1>Account</h1>
            <form>
                <InputControl
                    label="First Name"
                    name="{fname}"
                    type="text"
                    onChange={(e) =>
                        setUserInForm({
                            ...userInForm,
                            first_name: e.target.value,
                        })
                    }
                />
                <InputControl
                    label="Last Name"
                    name="{lname}"
                    type="text"
                    onChange={(e) =>
                        setUserInForm({
                            ...userInForm,
                            last_name: e.target.value,
                        })
                    }
                />
                <Button onClick={handleSubmit} text="Submit" />
            </form>
        </>
    );
}
