import React, { useRef } from 'react'
import { PiTelegramLogoLight } from "react-icons/pi";
import { IoLocation } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import map from '../../assets/WorldMap.svg'
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('submitted');
        emailjs
            .sendForm('service_rji5lkc', 'template_1i59ll7', form.current, {
                publicKey: 'plq54RvP-ihRlDH_d',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };




    return (
        <div id='contact' className='flex flex-col'>
            <div className='relative z-10 h-[600px] bg-[#58ACE6] getInTouchBg flex flex-col gap-16 items-center pt-[150px]'>
                <div className="absolute inset-0 z-[2] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute opacity-0 inset-0 z-0 rotate-180 bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]" />
                <div className='flex w-[70%] p-4 z-10'>
                    <div className='flex flex-col gap-3 w-[50%] p-4'>
                        <h3 className='text-6xl text-black font-semibold raleway'>Get In Touch</h3>
                        <p className='text-xl lato text-slate-600'>If you don't order a compressor then I have a reminder for you that I am still out there walking this earth freely and prolly looking for you</p>
                    </div>
                </div>
                <div className='w-[65%] flex shadow-2xl z-10'>
                    <div className='w-[70%] rounded-l-lg bg-white border'>
                        <form ref={form} onSubmit={sendEmail}>

                            <div className="mx-auto px-10 py-8 flex flex-col">
                                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>

                                <div className="flex gap-10 mb-6">
                                    <div className='w-1/2'>
                                        <label className="block text-gray-500 text-sm font-semibold mb-1">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full py-2 border-b border-gray-300"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-semibold text-gray-500 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full py-2 border-b border-gray-300"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-10 mb-6">
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-semibold text-gray-500 mb-1">
                                            Phone
                                        </label>
                                        <input
                                            type="number"
                                            className="w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none py-2 border-b border-gray-300 focus"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>

                                    <div className='w-1/2'>
                                        <label className="block text-sm font-semibold text-gray-500 mb-1">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full py-2 border-b border-gray-300"
                                            placeholder="Enter your company name"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6 relative">
                                    <label className="block text-sm font-semibold text-gray-500 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        className="w-full py-2 resize-none border-b border-gray-300"
                                        rows="3"
                                        placeholder="Enter your message"
                                    ></textarea>
                                    <div className='p-3 cursor-pointer absolute bottom-[-10px] right-[-20px] bg-blue-400 self-center rounded-full'>
                                        <button type="submit" className='p-0'>
                                            <PiTelegramLogoLight color='white' size={24} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <div className='w-[30%] rounded-r-lg bg-[#103F6F] flex flex-col gap-8 py-16 px-6'> */}
                    <div className='w-[35%] rounded-r-lg border bg-[#d7d4d4] flex flex-col gap-8 py-16 px-6'>
                        <h4 className='text-2xl text-slate-800'>Contact Information</h4>
                        <div className='flex flex-col w-[90%] gap-4 justify-around h-[70%]'>
                            <div className='flex gap-4 items-center'>
                                <IoLocation color='black' size={30} />
                                <p className=' text-slate-800'>5/12, UIT SEC-5, Bhiwadi, Alwar, Rajasthan-301019</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <MdOutlinePhoneIphone color='black' size={24} />
                                <p className=' text-slate-800'>9414240322</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <IoIosMail color='black' size={24} />
                                <p className=' text-slate-800'>sbairengineers@rediffmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[550px] bg-black relative z-0 flex items-end justify-center'>
                <div className='absolute bg-[#15061fcc] inset-0 z-10'></div>
                <div className='absolute z-0 inset-0 overflow-hidden'>
                    <img className='block w-full' src={map} alt="" />
                </div>
                <div className='w-[80%] flex gap-16 pb-20 z-20 justify-center'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-3xl text-slate-300'>Address 1</span>
                        <p className='text-lg text-white'>5/12, UIT SEC-5, Bhiwadi, Alwar, Rajasthan-301019</p>
                        <p className='text-white'>9414240322, 9785325857</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-3xl text-slate-300'>Address 2</span>
                        <p className='text-lg text-white'>41, 1st Floor, Jawar Nagar, Alwar, Rajasthan 301001</p>
                        <p className='text-white'>9928385023, 9887369524</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs