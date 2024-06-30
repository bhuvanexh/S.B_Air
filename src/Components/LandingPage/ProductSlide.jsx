import React from 'react'

const ProductSlide = ({ logo, product, sub, about }) => {
    return (
        <>
            <div className='flex h-[450px]'>
                <div className='w-[45%] p-8 flex items-center bg-[#F3F3F3] pl-10'>
                    <img className='max-h-full mx-auto max-w-full' src={logo} alt="" />
                </div>
                <div className='flex w-[55%] gap-6 justify-around flex-col border-l-2 py-16 px-10 bg-[#414040]'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl text-slate-50 font-bold roboto'>{product}</h1>
                        <span className='text-slate-gray text-xl text-slate-200 montserrat font-light'>{sub}</span>
                    </div>
                    <p className='text-slate-gray text-lg montserrat text-gray-100'>{about}</p>
                    <button className='px-16 py-3  rounded-3xl roboto self-center bg-[#4083a7] font-semibold text-white hover:bg-gray-600'>
                        BUY NOW
                    </button>
                </div>
            </div>

        </>
    )
}

export default ProductSlide