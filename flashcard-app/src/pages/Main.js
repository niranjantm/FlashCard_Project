import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../Components/MainNav";


export default function Main(){
    // -----This page renders navigation page and create flashcard page------//
    return(
        <div className="p-4">
        <div >
            <h1 className='text-2xl decoration-5 mb-[2%] text-red-500 font-medium  '>FlashCard Generator</h1>
        </div>
        
       <div className="pl-3 pr-3 pt-2">
        <MainNav></MainNav>
        <hr className='border-black border-spacing-2 m-[1%]'></hr>
        </div>

        {/* Using <Outlet> to render child route pages */}
        <Outlet></Outlet>
        </div>
    )
        
    
}