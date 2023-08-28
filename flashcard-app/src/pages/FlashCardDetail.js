import React, { Fragment,useState } from 'react'
import { useSelector } from 'react-redux'
import { BsArrowLeft } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Carousel from '../Components/Carousel';

function FlashCardDetail() {
    const deck = useSelector((state)=>{return state.deck})
    const {index} =useParams();
    const [current,setCurrent] = useState(0)

    const previous = (()=>{setCurrent((pre)=> (pre===0?deck[index].terms.lenght-1:current-1))})
    const next = (()=>{setCurrent((pre)=> (pre===deck[index].terms.lenght-1?0:current+1))})
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
        <div className='flex flex-row justify-between '>
          {/* ------------Term name buttons to select specific group */}
          <div className='bg-stone-200   rounded-lg shadow-md  '>
              <div className='p-3'>
                <p className='text-xl pb-1 font-medium'>FlashCards</p>
                <hr className='border border-gray-500'></hr>
                <div className='flex flex-col gap-1'>
                {deck[index].terms.map((item,index)=>{return(
                  <button className=' hover:text-red-500' onClick={()=>{console.log(index)}}>{item.termName}</button>
                )})}
                </div>
              </div>
          </div>
          {/* {------------------------Carousel----------------------------------------------} */}
          <div className=' min-w-[50px] '>
          <div className='max-w-lg max-h-[300px]  relative  ' >
            <div className='flex' style={{transform:`translateX(-${current*100}%)`}}>
            
                
                <Carousel>
                {deck[index].terms.map((item,i)=>{
              return
              })}
                </Carousel>
                
             
            </div>
          </div>
          </div>
          <div className='bg-green-500  '>
          <p>Hi</p>
          </div>
{/* {Image, carousel and share} */}
        
        </div>
          
        </div>
    </Fragment>
  )
}

export default FlashCardDetail