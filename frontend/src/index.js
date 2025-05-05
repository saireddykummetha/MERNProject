import React from 'react';
import ReactDOM from 'react-dom/client';
import Frame2 from "./Components/Frame2/Frame2";
import Frame4 from "./Components/Frame4/Frame4";
import Frame9 from "./Components/Frame9/Frame9.js";
import Frame8 from "./Components/Frame8/Frame8.js";
import CreateAccount from "./Components/CreateAccount";
import Frame3 from "./Components/Frame3/Frame3";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from'react-redux';
import { store } from './redux/index.js'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Frame1 from './Components/Frame1.js';


const router=createBrowserRouter(
  createRoutesFromElements(
    
           <Route  element={<App/>}>
           <Route path="/" element={<Frame1/>}/>
           <Route path="/signup" element={<CreateAccount/>}/>
           <Route path="/home" element={<Frame2/>}/>
           <Route path="/project" element={<Frame3/>}/>
           <Route path='/uploadflow' element={<Frame4/>}/>
            
            <Route path='/youtubefile' element={<Frame8/>}/> 
           <Route path='/editfile/:id' element={<Frame9/>}/>
        </Route>
           
    
)
)
  
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
  
);


reportWebVitals();
