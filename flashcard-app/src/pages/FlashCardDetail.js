import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { BsArrowLeft } from "react-icons/bs";

function FlashCardDetail() {
    const deck = useSelector((state)=>{return state.deck})
    
    const detailIndex = useSelector((state)=>{return state.detail})
    let index = detailIndex.index;
    console.log(index);

  return (
    <Fragment>
        <div className='flex flex-col bg-blue-300 '>
        <div className='flex flex-row '>
            <div className='w-[10%]'>
                <button type='button'><BsArrowLeft></BsArrowLeft></button>
            </div>
            <div className='bg-pink-300 w-[90%] content-center'>
            <p>{deck[index].groupName}</p>
            <p>{deck[index].groupDes}</p>
            </div>
        </div>
        <div>

        </div>
        </div>
    </Fragment>
  )
}

export default FlashCardDetail