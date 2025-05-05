


import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setProject } from './redux/createproject'
import { Outlet } from 'react-router-dom';
import { uploadProject } from './redux/uploadproject';
function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    (async()=>{
      const res=await fetch('http://localhost:8080/project')
      const resdata=await res.json()
      // console.log(resdata)
      dispatch(setProject(resdata))
    })()
    },[])
   
    useEffect(()=>{
      (async()=>{
        const res=await fetch('http://localhost:8080/youtube')
        const data=await res.json()
        console.log(data)
        dispatch(uploadProject(data))

        
      })()
      
      },[])
  return (
    <>
    
    <Toaster/>
    <main >
      <Outlet/>
     </main>
    
    </>
  );
}

export default App;
