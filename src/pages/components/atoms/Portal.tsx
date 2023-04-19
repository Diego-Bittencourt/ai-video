import React, { useEffect, useRef, useState } from 'react'
import ReactDOM, { createPortal } from 'react-dom'


// export class Portal extends React.Component {
//     componentDidMount(): void {
//         this.element = document.querySelector(this.props.selector)
//     }

//     render () {
//         if(this.element === undefined) {
//             return null
//         }

//         return ReactDOM.createPortal(this.props.children, this.element)
//     }
// }

export default function Portal({ children, selector }) {
    const ref = useRef()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.querySelector(selector)
        setMounted(true)
    }, [selector])

    return mounted ? createPortal(children, ref.current) : null
}