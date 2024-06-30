import React, { useState, useRef, useEffect } from 'react';
import vid from '../../assets/bgvid.webm'
const AboutUs = () => {
    const [showDetails, setShowDetails] = useState(false);
    const videoRef = useRef(null);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    useEffect(() => {
        // Auto play the video on mount
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <div id='aboutUs' className='relative flex gap-4 min-h-screen pt-16 pb-7'>
            <div className="absolute inset-0 bg-slate-950 z-10 opacity-50"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
            <video ref={videoRef} className="absolute inset-0 object-cover w-full h-full" autoPlay muted loop>
                <source src={vid} type="video/webm" />
            </video>
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            <div className='relative z-10 flex flex-col py-7 gap-6 items-center text-white text-center'>
                <div className='w-2/3 flex'>
                    <div className='flex flex-col items-center gap-9 p-5'>
                        <span className='text-3xl bg-[#070530da] px-4 py-2'>About Us</span>
                        <h3 className='text-4xl md:text-6xl lg:text-7xl'>Powering Industry with Reliable Air Solutions</h3>
                    </div>
                </div>
                <div className='flex flex-col w-2/3 items-center gap-7'>
                    <p className="text-lg md:text-xl">
                        Since 2018, SB AIR ENGINEERS has been a trusted partner for industrial air compressor sales and service. Founded by B.L Saini and Sandeep Kumar, our company is driven by a commitment to providing exceptional solutions that keep your facility operating at peak efficiency.
                    </p>
                    {/* )} */}
                    {showDetails && (
                        <div className="text-lg md:text-xl h-[350px] overflow-scroll bg-[#160725b7] px-7 py-5 text-left rounded-md">
                            <p>
                                Our team of 12+ dedicated professionals possesses a wealth of experience in the industrial air compressor industry. We are passionate about exceeding customer expectations by offering a comprehensive range of services, including:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>Air compressor sales: We offer a wide selection of new and used air compressors from leading manufacturers to meet the specific needs of your plant.</li>
                                <li>Air compressor service: Our highly skilled technicians provide comprehensive maintenance, repair, and troubleshooting services to ensure optimal performance and longevity of your equipment.</li>
                                <li>Parts and supplies: We stock a full inventory of genuine and aftermarket parts to keep your air compressor system running smoothly.</li>
                            </ul>
                            <p className="mt-4">
                                We are more than just an air compressor provider; we are a valuable resource for your industrial operation. Contact us today to discuss your specific requirements and learn how we can help you achieve your production goals.
                            </p>
                        </div>
                    )}
                    {showDetails ? (
                        <button onClick={toggleDetails} className="bg-[#350341e2] text-white text-xl py-2 px-4 rounded">
                            Show Less
                        </button>
                    ) : (
                        <button onClick={toggleDetails} className="bg-[#350341e2] text-white text-xl px-4 py-2 rounded">
                            Read More
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
