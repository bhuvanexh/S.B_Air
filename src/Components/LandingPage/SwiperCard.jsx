import React from 'react'

const SwiperCard = ({ logo, name, about }) => {
    return (
        // <div className='flex w-full h-full items-center flex-col justify-center bg-[#F2EAE3] border rounded-md'>
        //     <div className='flex items-center justify-center w-full h-2/3 px-4 py-2'>
        //         <img className='block max-h-full' src={logo} alt="" />
        //     </div>
        //     <div className='flex flex-col items-center gap-2 h-1/3 w-full px-3 py-4'>
        //         <span className='text-3xl montserrat font-semibold'>{name}</span>
        //         <p className='text-lg poppins text-slate-700 text-center px-4'>{about}</p>
        //     </div>
        // </div>
        <div className="relative flex w-full h-full flex-col py-4 rounded-xl bg-purple-500 bg-clip-border text-gray-700 shadow-md">
            <div className="relative p-4 flex justify-center items-center bg-pink-200 mx-4 -mt-6 h-[60%] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img className='block max-h-full' src={logo} alt="" />
            </div>
            <div className="px-6 py-3">
                <h5 className="mb-2 block font-sans text-3xl font-semibold leading-snug text-white">
                    {name}
                </h5>
                <p className="block font-sans text-lg leading-relaxed text-slate-300">
                    {about}                </p>
            </div>
            <div className="px-6 pb-2 mt-auto">
                <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-neutral-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Order Now
                </button>
            </div>
        </div>


    )
}

export default SwiperCard






{/* <div className='h-[85%] flex items-center px-4 '>
    <img className='block shadowImg max-h-full' src={logo} alt="slide_image" />
</div>
<div className='h-[15%] flex items-center'>
    <p className='text-3xl text-black'>{name}</p>
    <p></p>
</div> */}