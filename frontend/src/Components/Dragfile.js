import React, { useRef, useState } from 'react'

const Dragfile = () => {
    const [files,setfiles]=useState(null);
  
    const handlupload=()=>{

    }
    const handleDragover=(event)=>{
      event.preventDefault();
    } 
  const inputRef=useRef();
    const handleDrop=(event)=>{
        event.preventDefault();
        setfiles(event.dataTransfer.files)
    }

    if(files)return(
        <div className='uploads'>
            <ul>
                {Array.from(files).map((file,idx)=><li key={idx}>{file.name}</li>)}
            </ul>
            <div>
                <button onClick={()=>setfiles(null)}>Cancel</button>
                <button onClick={(handlupload)}>Upload</button>
            </div>
        </div>
    )
  return (
    <div>
    
            <div className='uploadsimble'
             onDragover={handleDragover}
             onDrop={handleDrop}
            >
            <input type='file'
            multiple
            onChange={(event)=>setfiles(event.target.files)}
            hidden
            ref={inputRef}
            />
            <button onClick={()=>inputRef.current.click()} className='selectfile'>Select File</button>
            </div>
     
    </div>
  )
}

export default Dragfile
