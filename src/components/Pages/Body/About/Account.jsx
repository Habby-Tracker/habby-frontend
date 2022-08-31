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
        <div className="flex flex-col min-w-full">
            <h1 className="text-purple text-bold text-3xl flex justify-start px-6">
                {`${user.firstName}'s Account`}
            </h1>
            <form className="flex flex-col mx-4">
                <InputControl
                    label="First Name"
                    name={user.firstName}
                    placeholder={user.firstName}
                    type="text"
                    onChange={(e) =>
                        setUserInForm({
                            ...userInForm,
                            first_name: e.target.value,
                        })
                    }
                    className="my-2 border-b-primaryBlack border h-10 max-w-full rounded px-2"
                />
                <InputControl
                    label="Last Name"
                    name={user.lastName}
                    placeholder={user.lastName}
                    type="text"
                    onChange={(e) =>
                        setUserInForm({
                            ...userInForm,
                            last_name: e.target.value,
                        })
                    }
                    className="my-2 border-b-primaryBlack border h-10 max-w-full rounded px-2"
                />
                <span className="flex flex-col justify-center items-end my-4">
                    <Button onClick={handleSubmit} text="Submit" width={'40%'}/>
                </span>
                
            </form>
        </div>
    );
}
