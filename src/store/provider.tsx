'use client';

import { Provider } from 'react-redux'
import { store } from './store'
import { FC, ReactNode } from 'react';

interface IChildren {
    children: ReactNode
}

export const Providers: FC<IChildren> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
