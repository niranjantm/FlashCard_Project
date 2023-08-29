import React, { Fragment,useState,useRef } from 'react'
import { useSelector } from 'react-redux'
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';
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
        <div className='flex flex-col  flex-wrap '>
        <div className='flex '>
            <div className='w-[]'>
                <Link to={"/MyflashCards"} className='' ><BsArrowLeft size={40}></BsArrowLeft></Link>
            </div>
            <div className=' w-[100%] flex flex-col items-center'>
            <p className='font-bold text-2xl mb-2'>{deck[index].groupName}</p>
            <p className='font-normal text-lg'>{deck[index].groupDes}</p>
            </div>
        </div>
        {/* ----------------------------Image, carousel and share----------------------------- */}
        <div className='flex flex-row justify-evenly max-sm:flex max-sm:flex-col max-sm:items-center'>
          {/* ------------Term name buttons to select specific group */}
          <div className='max-sm:w-[50%]'>
          <div className='bg-stone-200 border border-gray-600  rounded-lg shadow-md '>
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
          </div>
          {/* {------------------------Carousel----------------------------------------------} */}
          <div className=' '>
          <div className='max-w-2xl min-h-[100%]  relative border border-gray-600 shadow-lg rounded-lg overflow-hidden max-sm:max-w-sm scroll-smooth' ref={carouselRef} >
            <div className='flex min-w-[100%] max-w-[100%] min-h-[100%]' >
            {deck[index].terms.map((item,i)=>{
              return(
                
                <div className='flex bg-stone-200 min-w-[100%] min-h-[100%] gap-2   max-sm:flex max-sm:flex-col' >
                 {console.log(current)}
                 
                  {/* -----------------------Image-------------------------------------- */}
                <div className='  max-sm:flex max-sm:justify-center'>
                  {item.termImg?<img src={item.termImg} alt='termImg' className='max-w-[200px] max-h-[200px] m-2'></img>:""}
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
          <div className=' flex flex-col items-center mt-2 max-sm:flex-row max-sm:gap-2'>
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