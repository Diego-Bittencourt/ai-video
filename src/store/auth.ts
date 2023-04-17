import { createContext, useContext, useState } from 'react'

const Context = createContext()

export function AuthProvider({ children }) {
    const [authCredentials, setAuthCredentials] = useState({
        loginEmail: '',
        loginPassword: '',

    })

    const [authTokens, setAuthTokens] = useState({
        token: '',
        accessToken: '',
        refreshToken: ''
    })

    const [isLoading, setIsLoading] = useState('false')

    return (
        <Context.Provider value={[authCredentials, setAuthCredentials, authTokens, setAuthTokens, isLoading, setIsLoading]} >{children}</Context.Provider>
    )
}

export function useAuthContext() {
    return useContext(Context)
}