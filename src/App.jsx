import React, { useEffect, useState } from 'react'
import Navbar from './Components/LandingPage/Navbar'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import CompletePage from './Components/LandingPage/CompletePage'
import ProductPage from './Components/LandingPage/ProductPage'



const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
  }, [loading]);



  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar loading={loading} />}>
      <Route index element={<CompletePage />} />
      <Route path='product' element={<ProductPage />} />
    </Route>
  ))


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App



{/* {loading && ( */ }
{/* <motion.div
        className='absolute z-50 h-[100vh] w-full flex items-center justify-center bg-white'
        initial={{ opacity: 1, height: "100vh", width: "100%" }}
        // initial={{ height: "100vh", width: "100%" }}
        animate={{ height: 'auto', width: "auto", opacity: scrollValue > 0 ? 0 : 1, y: scrollValue > 0 ? -50 : 0 }}
        // animate={{ height: 'auto', width: "auto" }}
        transition={{
          duration: 3,
          opacity: {
            duration: 0.5
          },
          y: {
            duration: 0.5
          }
        }}
      > */}

{/* </motion.div> */ }
{/* 
      )} */}

{/* <SimpleLogo /> 
       <div className='absolute h-auto w-auto flex items-center justify-center bg-white z-50'>
         <AnimatedLogo />
       </div>
      */}