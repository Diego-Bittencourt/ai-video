import { ReactNode, FC } from "react"


interface IButton {
    children: ReactNode,
    onClick?: (e?: any) => void,
    disabled?: boolean
}

const Button: FC<IButton> = ({ 
    children,
    onClick = () => {},
    disabled,
}) => {

    return (
        <button onClick={onClick} className="border-gray-700 bg-emerald-500 border-2 rounded-md hover:shadow-lg selection:scale-50 p-4 text-white text-2xl min-w-[100px]">{ children }</button>
    )
}

export default Button