import { FC, ReactNode } from 'react'

interface IBadge {
    children: ReactNode,
    status: string,

}

const Badge: FC<IBadge> = ({ children, status }) => {
    let classNames
    switch (status) {
        case 'draft': 
            classNames = 'bg-yellow-600';
            break;
            
        case 'rendering':
            classNames = 'bg-teal-600 text-white';
            break;
            
        case 'ready':
            classNames = 'bg-emerald-800 text-white';
            break;
            
        case 'error':
            classNames = 'bg-red-900 text-white';
            break;
            
        default:
            classNames = 'bg-gray-800 text-white';
    }


    return (
        <span className={`p-1 border border-transparent font-bold rounded-md ${classNames}`}>{children}</span>
    )
}

export default Badge