import React, { Fragment } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import PreviewImg from '../Components/PreviewImg';
import FlashCardDetail from './FlashCardDetail';
import {Link} from "react-router-dom"
import { detailAction } from '../store/DetailReducer';

function MyflashCards() {
  const decks = useSelector((state)=>{return state.deck})
  console.log(decks)
 
  
  
  const empty  = ()=>{
    return(
      <h1>No Decks</h1>
    )
    
    }
    
  return (
    <Fragment>
      <div className='grid grid-cols-3 gap-3 pr-4 pl-4 max-sm:flex max-sm:flex-col'> 
      {decks.length===0?empty():decks.map((item,index)=>{
        return(
          <div className=' bg-stone-100 pb-3 rounded-lg shadow-lg'>
            {/* ----------------------Parent div for Image and Name-------------------------------- */}
          <div className=' flex flex-row mb-2'>
            {/* -----------------------Image----------------------------------- */}
            <div className='flex '>
              <PreviewImg file={item.groupImg} className={"rounded-full  h-20 w-20"}></PreviewImg>
            </div>
            {/* ----------------------Name-------------------------------------- */}
            <div className=' w-[100%] flex justify-center'>
          <p className='text-2xl font-bold'>{item.groupName}</p>
            </div>
          </div>
          {/* --------------------------Description----------------------------- */}
          <div className='flex flex-col space-y-3' >
            <div className=' flex justify-center pl-2 '>
            <p className='text-lg'>{item.groupDes}</p>
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