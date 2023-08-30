import React, { Fragment } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import FlashCardDetail from './FlashCardDetail';
import {Link} from "react-router-dom"
import { detailAction } from '../store/DetailReducer';

function MyflashCards() {
  const decks = useSelector((state)=>{return state.deck})
  console.log(decks)
 
  
  
  const empty  = ()=>{
    return(
      <div className=' w-[100%] p-3'>
      <h1 className='text-xl font-normal pb-2'>No Decks are Created Yet</h1>
      <Link to={"/"} className='hover:bg-red-500 border border-gray-600 pl-2 pr-2 pt-1 pb-2 rounded-md'>Click Here to create</Link>
      </div>
    )
    
    }
    
  return (
    <Fragment>
      <div className='grid grid-cols-3 gap-3 pr-4 pl-4 max-sm:flex max-sm:flex-col'> 
      {decks.length===0?empty():decks.map((item,index)=>{
        return(
          <div className=' bg-stone-100 pb-3 rounded-lg shadow-lg max-h-[300px]'>
            {/* ----------------------Parent div for Image and Name-------------------------------- */}
          <div className=' flex flex-row mb-2'>
            {/* -----------------------Image----------------------------------- */}
            <div className='flex '>
              <img src={item.groupImg} alt='group Image' className={"rounded-full  h-20 w-20"}></img>
            </div>
            {/* ----------------------Name-------------------------------------- */}
            <div className=' w-[100%] flex justify-center'>
          <p className='text-2xl font-bold'>{item.groupName}</p>
            </div>
          </div>
          {/* --------------------------Description----------------------------- */}
          <div className='flex flex-col space-y-3 h-full' >
            <div className=' flex justify-center pl-2 max-h-[100px] overflow-y-scroll flex-wrap  '>
            <p className='text-lg '>{item.groupDes}</p>
            </div>
            <div className='flex justify-center'>
              <p>{item.terms.length===1?`${item.terms.length} card`:`${item.terms.length} cards`}</p>
            </div>
            <div className='flex justify-center'>
              <button type='button' onClick={()=>{}} className='border border-red-500 text-red-500 pl-4 pr-4 rounded-lg hover:bg-red-500 hover:text-black'><Link to={`/FlashCardDetail/${index}`}>View</Link></button>
              </div>
            </div>
          </div>
        )
        
      })}
      </div>
    </Fragment>
  )
}

export default MyflashCards