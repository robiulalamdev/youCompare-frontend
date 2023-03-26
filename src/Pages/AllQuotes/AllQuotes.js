import React, { useState } from 'react';
import arrowDown from '../../accets/icons/arrow-down.svg'
import arrowRight from '../../accets/icons/arrow-right.svg'
import rightArrow from '../../accets/icons/right-arrow.png'
import close from '../../accets/icons/close.png'
import right from '../../accets/icons/right.png'
import img1 from '../../accets/logo1/NoPath - Copy (2).png'
import img2 from '../../accets/logo1/NoPath - Copy (3).png'
import { Link } from 'react-router-dom';
import SingleQuote from '../../components/DriverPageCompo/SingleQuote';

const AllQuotes = () => {
    const [takafullSwitch, setTakafullSwitch] = useState(false)
    const [openInsurer, setOpenInsurer] = useState(true)
    const [insurerSwitch, setInsurerSwitch] = useState(true)
    const [moreInfo, setMoreInfo] = useState(false)
    return (
        <main className='relative bg-gradient-to-r from-sky-100 via-purple-100 to-sky-100 px-4 min-h-screen'>
            <div className='max-w-[1440px] mx-auto py-12'>
                <div className='grid grid-cols-1 gap-y-8 mt-12'>


                    <div className='bg-gradient-to-r from-indigo-50 via-purple-50 to-sky-50 shadow border h-fit rounded-xl p-4 md:p-6'>
                        <div className='flex justify-between items-center gap-2 mb-6'>
                            <h1 className='text-rose-600 font-semibold'>Filter</h1>
                            <button className='text-gray-600'>Clear Filter</button>
                        </div>


                        <div className='grid md:grid-cols-2 gap-6'>
                            <div className='flex flex-col'>
                                <div className=''>
                                    <h1 className='text-sky-600 text-left mb-2 font-bold'>Policy Futures</h1>
                                    <div className='grid grid-cols-2 gap-2 mb-6'>
                                        <button className='flex justify-center items-center px-3 py-2 border shadow'>
                                            <span className='text-gray-600'>Fully Comprehensive</span>
                                        </button>
                                        <button className='flex justify-center items-center px-3 py-2 border shadow'>
                                            <span className='text-gray-600'>Thirt Pertu Only</span>
                                        </button>
                                    </div>
                                </div>

                                <div className=''>
                                    <h1 className='text-sky-600 text-left mb-2 font-bold'>Repaire By</h1>
                                    <div className='grid grid-cols-3 gap-2 mb-6'>
                                        <button className='flex flex-col justify-center items-center gap-2 p-2 rounded border shadow'>
                                            <img className='w-full md:w-24 h-20 object-cover rounded mx-auto' src="https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRveW90YSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
                                            <span className='text-gray-600 text-sm'>Agency Repaire</span>
                                        </button>
                                        <button className='flex flex-col justify-center items-center gap-2 p-2 rounded border shadow'>
                                            <img className='w-full md:w-24 h-20 object-cover rounded mx-auto' src="https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRveW90YSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
                                            <span className='text-gray-600 text-sm'>Premium Garage</span>
                                        </button>
                                        <button className='flex flex-col justify-center items-center gap-2 p-2 rounded border shadow'>
                                            <img className='w-full md:w-24 h-20 object-cover rounded mx-auto' src="https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRveW90YSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
                                            <span className='text-gray-600 text-sm'>Approved Garage</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-sky-600 text-left font-bold'>Only Takaful</h1>
                                    <div className="flex flex-col justify-center items-center ">
                                        <div onClick={() => setTakafullSwitch(!takafullSwitch)}
                                            className={`w-11 h-[22px] flex items-center rounded-full p-1 cursor-pointer
                                        ${takafullSwitch ? 'bg-red-200' : 'bg-gray-300'}`}>
                                            <div className={`h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out
                                        ${takafullSwitch ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='cursor-pointer'>
                                    <div className='flex justify-between items-center mb-4'>
                                        <h1 onClick={() => setOpenInsurer(!openInsurer)} className='text-sky-600 text-left font-bold'>Insurer</h1>
                                        <img onClick={() => setOpenInsurer(!openInsurer)} className='w-6' src={openInsurer ? arrowDown : arrowRight} alt="" />
                                    </div>
                                    {
                                        openInsurer && <div className='flex justify-start items-center gap-3 mb-4'>
                                            <div className="flex flex-col justify-center items-center ">
                                                <div onClick={() => setInsurerSwitch(!insurerSwitch)}
                                                    className={`w-11 h-[22px] flex items-center rounded-full p-1 cursor-pointer
                                        ${insurerSwitch ? 'bg-red-200' : 'bg-gray-300'}`}>
                                                    <div className={`h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out
                                        ${insurerSwitch ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className='text-gray-600 text-left font-bold'>Iriental Insurance Company</h1>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='cursor-pointer'>
                        <h1 className='text-sky-600 font-bold text-2xl mb-4 text-left'>Scroll Down To See All Qoutes</h1>
                        <div className='grid grid-cols-1 gap-4'>

                            {/* cart number ===>1 */}
                            <SingleQuote />

                            {/* cart number ===>2 */}
                            {/* <div className=' w-full h-fit border hover:border-rose-100 shadow-md hover:shadow-xl hover:shadow-rose-200 duration-300 rounded-xl p-2 md:py-8 md:px-8'>
                                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                                    <div className='flex flex-col md:flex-row md:items-center md:gap-4'>
                                        <img className='w-44 mx-auto ml-0 md:m-0' src={img2} alt="" />
                                        <h1 className='text-xl text-left md:text-right font-bold text-blue-900'>Salama Insurance Thirt Perty Only</h1>
                                    </div>
                                    <div className='flex flex-col md:justify-end items-start md:items-end gap-2 mr-6 md:m-0'>
                                        <h1 className='text-3xl font-bold text-yellow-500'>AED 770</h1>
                                    </div>
                                </div>
                                <hr className='border-gray-400 my-4' />
                                <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                                    <div className='w-full flex-grow flex flex-wrap items-start gap-x-2 md:gap-x-6 gap-y-12 mb-6'>
                                        <div className='w-36 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>What is The Excess?</h1>
                                            <img className='w-4' src={close} alt="" />
                                            <h1 className='text-gray-700 text-center'>No Repairs</h1>
                                        </div>
                                        <div className='w-36 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>Who Will Repaire My Car?</h1>
                                            <img className='w-4' src={close} alt="" />
                                            <h1 className='text-gray-700 text-center'>No Repairs</h1>
                                        </div>
                                        <div className='w-36 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>Fre Registration Service</h1>
                                            <img className='w-4' src={close} alt="" />
                                            <h1 className='text-gray-700 text-center'>Not Available</h1>
                                        </div>
                                        <div className='w-36 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>Thirt Perty Demage Limit</h1>
                                            <h1 className='text-blue-900 text-center font-bold'>2 Million</h1>
                                            <h1 className='text-gray-700 text-center'>AED</h1>
                                        </div>
                                        <div className='w-36 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>Roadside Assistance</h1>
                                            <img className='w-5' src={right} alt="" />
                                            <h1 className='text-gray-700 text-center'>G0LD</h1>
                                        </div>

                                    </div>
                                    <div className='relative flex flex-col justify-center items-center gap-4 py-6 px-6 md:p-0'>
                                        <Link to='/qoutes' className='w-72 md:w-44 h-12 bg-rose-600 rounded-xl text-white flex justify-center items-center mt-14 mx-auto md:mr-0 font-bold'>
                                            <span>View Details</span>
                                        </Link>
                                        <p className='text-blue-900 underline text-center'>Terms & Conditions</p>
                                    </div>


                                </div>
                                <div className='flex justify-center items-center'>
                                    <h1 onClick={() => setMoreInfo(!moreInfo)} className='text-gray-600 text-left font-bold'>Check Here For More Info</h1>
                                    <img onClick={() => setMoreInfo(!moreInfo)} className='w-6' src={moreInfo ? arrowDown : arrowRight} alt="" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AllQuotes;