import { useContext } from 'react';
import { signIn as signInService, signUp as signUpService, signOut as signOutService } from '../Services/user-service';
import { showError, showSuccess } from '../Services/toaster';
import { UserStateContext, UserActionContext } from '../Context/UserContext';

export function useUser() {
    const { user, profile } = useContext(UserStateContext);
    return { user, profile };
}

export function useAuthActions() {
    const { setUser } = useContext(UserActionContext);

    const signIn = async (email, password) => {
        const { data, error } = await signInService(email, password);
        if (error) {
            showError(error.message);
        }
        if (data) {
            setUser(data);
            showSuccess('Signed in successfully');
        }
    };

    const signUp = async (email, password) => {
        const { data, error } = await signUpService(email, password);
        if (error) {
            showError(error.message);
        }
        if (data) {
            setUser(data);
            showSuccess('Signed up successfully');
        }
    };

    const signOut = async () => {
        const { data, error } = await signOutService();
        if (error) {
            showError(error.message);
        }
        if (data) {
            setUser(null);
            showSuccess('Signed out successfully');
        }
    };

    return { signIn, signUp, signOut };
}

