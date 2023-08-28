import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { BsArrowLeft } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';

function FlashCardDetail() {
    const deck = useSelector((state)=>{return state.deck})
    const {index} =useParams();
    console.log("index----->",index)

  return (
    <Fragment>
        <div className='flex flex-col bg-blue-300 relative'>
        <div className='flex'>
            <div className='w-[]'>
                <button type='button' className=''><BsArrowLeft size={40}></BsArrowLeft></button>
            </div>
            <div className=' w-[100%] flex flex-col items-center'>
            <p className='font-bold text-2xl mb-2'>{deck[index].groupName}</p>
            <p className='font-normal text-lg'>{deck[index].groupDes}</p>
            </div>
        </div>
        {/* ----------------------------Image, carousel and share----------------------------- */}
        <div className='grid grid-cols-3 gap-4'>
          
{/* {Image, carousel and share} */}
        
        </div>
        </div>
    </Fragment>
  )
}

export default FlashCardDetail