import { useContext } from 'react';
import {
    signIn as signInService,
    signUp as signUpService,
    signOut as signOutService,
} from '../Services/user-service';
import { showError, showSuccess } from '../Services/toaster';
import { UserStateContext, UserActionContext } from '../Context/UserContext';

export function useUser() {
    const { user, profile, checkedForUser } = useContext(UserStateContext);
    return { user, profile, checkedForUser };
}

export function useAuthActions() {
    const { setUser } = useContext(UserActionContext);

    const signIn = async (email, password) => {
        const response = await signInService(email, password);
        if (response.message) {
            showError(response.message);
        } else {
            setUser(response);
            showSuccess('Signed in successfully');
        }
    };

    const signUp = async (email, password) => {
        const response = await signUpService(email, password);
        if (response.message) {
            showError(response.message);
        } else {
            setUser(response);
            showSuccess('Signed up successfully');
        }
    };

    const signOut = async () => {
        await signOutService();
        setUser(null);
        showSuccess('Signed out successfully');
    };

    return { signIn, signUp, signOut };
}
