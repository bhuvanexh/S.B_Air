import React from 'react'
import isi from '../../assets/isiCertified.png'
import iso from '../../assets/isoCertified.png'
import comp from '../../assets/aboutImg.webp'
import { useOutletContext } from 'react-router-dom'
const About = () => {

    return (
        <div id='about' className='scroll-snap h-[100vh] min-h-[600px] pt-[20px] bg-[#F8F8F8] flex flex-col relative items-center justify-center'        >
            {/* <div className='relative z-10 w-5/6 mx-auto flex flex-col gap-12 grow justify-center items-center text-center'>
                <p className='stroke bg-slate-800 px-3 py-2 text-[42px] text-[#f2f5f8] poppins-medium uppercase'>
                    Industry-Leading Air Compressors
                </p>
                <h4 className='text-7xl  text-[#151515] raleway-bold leading-tight raleway-regular'>
                    We set the bar little too high for performance and efficiency!
                </h4>
            </div>
            <div className='flex bg-[#262626] h-[1/3]'>
                <div>
                    A RANGE OF OVER 400 PRODUCTS TO SUIT YOUR REQUIREMENTS
                </div>
                <div>

                </div>
            </div> */}
            <div className="absolute inset-0 z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

            <div className='relative z-10 w-[80%] pb-6 h-[500px] flex flex-col gap-10 justify-center items-center text-center'>
                <p className='bg-slate-800 px-3 py-2 text-[36px] text-[#f2f5f8] poppins-medium uppercase'>
                    Industry-Leading Air Compressors
                </p>
                <h4 className='text-6xl  text-[#151515] raleway-bold leading-tight raleway-regular'>
                    We set the bar little too high for performance and efficiency!
                </h4>
            </div>
            <div className='w-full h-[300px] bg-[#262626] flex z-10'>
                <div className='text-4xl w-1/2 h-full text-white flex justify-end items-center'>
                    <p className='w-[70%] lato-regular'>
                        A RANGE OF OVER 400 PRODUCTS TO SUIT YOUR REQUIREMENTS
                    </p>
                </div>
                <div className='w-1/2 relative z-0'>
                    <img className='block absolute w-[500px] top-[-80px]' src={comp} alt="" />
                </div>
            </div>
        </div>

    )
}

export default About





// <div className='w-[500px] h-[400px] left-0 scale-x-[-1] bottom-[-50px] absolute opacity-70 whiteTech'></div>

// <div className='relative z-10 flex gap-10 py-4 bg-[#333] justify-center w-full items-center'>
//     <div className='max-w-[25%] flex justify-center'>
//         <img className='block h-20 md:h-32' src={iso} alt="ISO Certified Logo" />
//     </div>
//     <div className='max-w-[45%] text-white text-center'>
//         <h3 className='text-3xl montserrat-medium'>
//             Certified for Safety and Efficiency
//         </h3>
//     </div>
//     <div className='max-w-[25%] flex justify-center'>
//         <img className='block h-20 md:h-32' src={isi} alt="ISI Certified Logo" />
//     </div>
// </div>