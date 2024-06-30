import React from 'react'
import Carousel from './Carousel'
import mainProduct from '../../assets/mainProduct.png'
import ProductSlides from './ProductSlides'
const Products = () => {
    return (
        <div id='product' className='scroll-snap trial bgProduct min-h-[700px] flex flex-col gap-7 pt-20 items-center relative border-b'>
            <h2 className='text-7xl bg-black px-4 py-2 z-10 text-white lato tracking-tight font-semibold'>PRODUCTS</h2>

            <div className='flex pt-2 px-6 gap-4 z-10 justify-center items-center'>
                <div className='w-1/2'>
                    <img src={mainProduct} alt="" />
                </div>
                <div className='w-1/2'>
                    <div className='w-[85%] flex flex-col gap-8 px-2 pb-5'>
                        <h4 className='text-6xl poppins text-slate-900 font-semibold'>Rotary Screw Air Compressors</h4>
                        <p className='text-xl text-slate-700'>FS-Curtis rotary screw air compressors offer businesses the best
                            combination of time-proven designs and technologies. Our rotary
                            screw compressors also ensure the highest levels of reliability,
                            efficiency, and productivity available.</p>
                    </div>
                </div>
            </div>
            <div className='w-full productBg py-24'>
                <div className='w-[65%] mx-auto relative'>
                    <ProductSlides />
                </div>
            </div>
        </div>
    )
}

export default Products

{/* <Carousel /> */ }

// <div id='product' className='scroll-snap bg-[#F2F0F6] min-h-[500px] flex flex-col gap-7 py-20 items-center'>
//     <h1 className='text-7xl text-[#1d0d38] montserrat font-semibold tracking-tight'>PRODUCTS</h1>
// </div>


{/* <div className="absolute z-0 inset-0 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"><div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div> */}
{/* <div class="absolute inset-0 z-0 bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div> */ }
{/* <div className="absolute inset-0 z-0  rotate-180 bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]" /> */ }

{/* <h2 className='text-7xl bg-[#054148] px-4 py-2 z-10 text-white lato tracking-tight font-semibold'>PRODUCTS</h2> */ }