import React, { Fragment } from 'react'
import  ReactDOM  from 'react-dom'
import { BiSolidCopy as Copy } from "react-icons/bi";
import { CopyToClipboard } from 'react-copy-to-clipboard'

function ShareModal({share,onClose}) {
  // Here we are coping the current page url by using window.location.href
    let URL = window.location.href;
    
  // Here we are using CopyToClipboard component provided by react-copy-to-clipboard to copy text to clip board
  // Here we created a portal to create a pop up when clicked on share button 
  
  return ReactDOM.createPortal(
    <CopyToClipboard text={URL}>
        <div className='fixed right-0 left-0 top-0 bottom-0 bg-black/50 flex items-center justify-center'>

        <div className='max-w-lg  bg-slate-50 rounded-md flex flex-col gap-5'>

            <div className='flex justify-between'>

            <div className=''>
            <p className='text-lg font-medium'>Share</p>
            </div>
            
            <div className='hover:bg-red-500 rounded-md border border-gray-500'> 
            
            <button onClick={onClose} className='text-lg font-medium pl-2 pr-2  hover:text-black'>X</button>
            
            </div>

            </div>

            <div className=' flex justify-center p-3 gap-3'>
                <p className='border border-gray-600 pl-3 pr-3 rounded-md'>{URL}</p>
                <button><Copy size={30} className='hover:border hover:border-gray-500 rounded-md'></Copy></button>
            </div>
        </div>
        </div>
        </CopyToClipboard>,
    document.getElementById("share")
  )
}

export default ShareModal