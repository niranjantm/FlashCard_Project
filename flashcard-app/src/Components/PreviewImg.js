import React from 'react'

function PreviewImg({file,className}) {
  return (
    <div>
    {file?<img src={file} className={className} alt='preview'></img>:""}
    </div>
  )
}

export default PreviewImg