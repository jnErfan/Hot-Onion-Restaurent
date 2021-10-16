import { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';


export const AuthProvider = createContext();

const AuthContext = ({children}) => {
    const authContextProvider = useFirebase();
    return (
        <AuthProvider.Provider value={authContextProvider}>
            {children}
        </AuthProvider.Provider>
    );
};
export default AuthContext;