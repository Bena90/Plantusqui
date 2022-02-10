import { createContext, useEffect, useState } from "react";

export const UserAuthContext = createContext();
CartContext.displayName = 'Userauthenticator'

export const UserAuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);





    return (
        <div>Hola</div>
    );
};