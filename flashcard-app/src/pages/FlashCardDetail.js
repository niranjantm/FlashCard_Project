import React, { Fragment,useState,useRef } from 'react'
import { useSelector } from 'react-redux'
import { BsArrowLeft } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

function FlashCardDetail() {
    const deck = useSelector((state)=>{return state.deck})
    const {index} =useParams();
    const [current,setCurrent] = useState(0)
    const carouselRef = useRef();

    const previous = (()=>{
      const width = carouselRef.current.clientWidth;
      console.log("width------>",carouselRef.current.scrollLeft);
      carouselRef.current.scrollLeft = carouselRef.current.scrollLeft-width;
    })
    const next = (()=>{
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollLeft = carouselRef.current.scrollLeft+width;
    })
    console.log("index----->",index)

  return (
    <Fragment>
        <div className='flex flex-col bg-blue-300 '>
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
          <div className=' '>
          <div className='max-w-lg   relative overflow-hidden max-sm:max-w-sm scroll-smooth' ref={carouselRef} >
            <div className='flex min-w-[100%] max-w-[100%] ' >
            {deck[index].terms.map((item,i)=>{
              return(
                
                <div className='flex bg-pink-300 min-w-[100%]  gap-2 rounded-lg' >
                 {console.log(current)}
                 
                  {/* -----------------------Image-------------------------------------- */}
                <div className=''>
                  <img src={item.termImg} alt='termImg' className='max-w-[200px] max-h-[200px] m-2'></img>
                  </div>
{/* ------------------------------------Description------------------------------------------ */}
                  <div>
                  <p className='m-2'>{item.termDes}</p>
                </div>
                {/* --------------------Navigation Buttons--------------------------------- */}
                <div className=' absolute flex justify-between   min-w-[100%] bottom-0 '>
                  <button onClick={previous} type='button' className='  rounded-full shadow-lg bg-white/50 text-gray-500 hover:text-red-500'><BiChevronLeft size={40}></BiChevronLeft></button>
                  <button onClick={next} type='button' className='  rounded-full shadow-lg bg-white/50 text-gray-500 hover:text-red-500'><BiChevronRight size={40}></BiChevronRight></button>
                  </div>
                </div>
                
              )
            })}
            
            </div>
          </div>
          </div>
          <div className=' flex flex-col items-center'>
          <div>
            <button type='button' className='rounded-lg border border-gray-600 pt-2 pb-2 pl-4 pr-4 shadow-lg bg-slate-200 hover:bg-red-500 mb-3'>Share</button>
          </div>
          <div>
            <button type='button' className='rounded-lg border border-gray-600 pt-2 pb-2 pl-4 pr-4 shadow-lg bg-slate-200 hover:bg-red-500 mb-3'>Download</button>
          </div>
          <div>
            <button type='button'className='rounded-lg border border-gray-600 pt-2 pb-2 pl-4 pr-4 shadow-lg bg-slate-200 hover:bg-red-500 mb-3'>Print</button>
          </div>
          </div>
{/* {Image, carousel and share} */}
        
        </div>
          
        </div>
    </Fragment>
  )
}

export default FlashCardDetail