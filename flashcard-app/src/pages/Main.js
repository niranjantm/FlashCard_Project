import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../Components/MainNav";


export default function Main(){
    return(
        <Fragment>
        <div>
            <h1 className='text-2xl decoration-5 mb-[2%] text-black'>Create FlashCards</h1>
        </div>
        <hr className='border-black border-spacing-2 m-[1%]'></hr>
        <MainNav></MainNav>
        <Outlet></Outlet>
        </Fragment>
    )
        
    
}