import { FC, createContext, useContext, useState, ReactNode } from "react";

interface User {
    name: string;
    email: string;
    isAuthenticated: boolean;
}

interface LoginContextValue {
    user: User | null;
    login: (email: string, password: string) => void;
    logout: () => void;
}

const LoginContext = createContext<LoginContextValue | null>(null);

interface LoginContextProviderProps {
    children: ReactNode | ReactNode[];
}

export const LoginContextProvider: FC<LoginContextProviderProps> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string, password: string) => {
        // Authenticate user here
        const authenticatedUser: User = {
            name: `User ${Math.floor(Math.random() * 100)}`,
            email: email,
            isAuthenticated: true,
        };
        setUser(authenticatedUser);
    };

    const logout = () => {
        setUser(null);
    };

    const value: LoginContextValue = {
        user,
        login,
        logout,
    };

    return (
        <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
    );
};

export const useLogin = () => {
    const loginContext = useContext(LoginContext);
    if (!loginContext) {
        throw new Error("useLogin must be used within a LoginContextProvider");
    }
    return loginContext;
};
