'on client'
import { FC, ReactNode } from "react"
import styles from './Loading.module.css'



const Loading = () => {


    return (
        <div className="w-screen h-screen fixed z-10">
        <div id="loading-backdrop" className="bg-gray-800 opacity-60 w-full h-full fixed z-10"></div>
        <h2 className="text-white text-xl lg:text-4xl z-30 top-2/3 w-full text-center">ローディング</h2>
        
        <div className="w-full h-full flex flex-wrap content-center justify-center z-20 lg:left-4 rotate-180">
            
            <div id="loader-wrapper" className={`${styles.loader} loader-wrapper h-[50px] w-[100px] lg:h-36 lg:w-80 flex -skew-x-12`}>
                <div className="bg-emerald-800 flex-1"></div>
                <div className="bg-emerald-600 flex-1"></div>
                <div className="bg-emerald-400 flex-1"></div>
                <div className="bg-emerald-200 flex-1"></div>
            </div>
            
        </div>
        
    </div>
    )
}


export default Loading