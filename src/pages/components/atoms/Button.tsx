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
        <button onClick={onClick}>{ children }</button>
    )
}

export default Button