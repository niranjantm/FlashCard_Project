import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
import MainNav from "../Components/MainNav";
import flashcardGeneratorImage from "../utils/Flashcard-Generator.png"


export default function Main(){
    // -----This page renders navigation page and create flashcard page------//
    return(
        <div className="p-4  min-h-screen min-w-full">
        <div className="w-full" >
           <Link to="/"><img src={flashcardGeneratorImage} className="w-[500px]"></img></Link> 
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