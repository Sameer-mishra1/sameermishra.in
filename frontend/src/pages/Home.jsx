import Sameer from "../assets/Sameer.png"
import { Handles } from "../components/Handles"

export const Home = () => {
    return <div className="bg-neutral-800 h-screen flex flex-col">
        {/* Menu */}
        <div className="p-6 ml-2 fixed">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
        </div>
        {/* Photo */}
        <div className="p-9 mt-5">
            <img src={Sameer}/>
        </div>
        <div className="flex flex-col justify-center w-full">
        {/* Name */}
        <div className="flex w-full justify-center text-zinc-600">
            <p>HI I'M</p>
        </div>
        <div className="text-3xl flex w-full justify-center">
            <h3 className="text-stone-300">
            SAMEER MISHRA
            </h3>
        </div>
        {/* Introduction */}
        <div className="flex w-full justify-center p-6 text-center text-zinc-500">
            <h6>A PASSIONATE FULL-STACK DEVELOPER & AN ASPIRING ENTREPRENEUR</h6>
        </div>
        {/* Social Media Icons */}
        <div className="mt-5 flex items-center justify-center space-x-3">
            <Handles />
        </div>
        </div>
        
    </div>
}