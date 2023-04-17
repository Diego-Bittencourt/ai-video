'use client'

import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react'

type ContextProps = {
    loginEmail: string,
    loginPassword: string,
    token: string,
    accessToken: string,
    refreshToken: string,
    isLoading: boolean,
    setAuthData: Dispatch<SetStateAction<any>>,
    setIsLoading: Dispatch<SetStateAction<void>>
}


const GlobalContext = createContext<ContextProps>({
    loginEmail: '',
    loginPassword: '',
    token: '',
    accessToken: '',
    refreshToken: '',
    isLoading: false,
    setAuthData: ():any => {},
    setIsLoading: ():void => {}

})