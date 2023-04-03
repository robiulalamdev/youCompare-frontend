import React, { useState } from 'react';
import arrowDown from '../../../accets/icons/arrow-down.svg'

const lengthItems = ["20 Years", "30 Years", "40 Years", "50 Years", "60 Years",]
const options = ["Option One", "Option Two", "Option Tree"]

const TermMyPertnarForm = () => {
    const [showItems, setShowItems] = useState(0)
    const [selectedLength, setSelectedLength] = useState('')
    const [selectedOption, setSelectedOption] = useState('')


    const handleSelectLenht = (data) => {
        setSelectedLength(data)
        setShowItems(0)
    }
    const handleSelectOption = (data) => {
        setSelectedOption(data)
        setShowItems(0)
    }
    return (
        <div className='grid md:grid-cols-2 gap-4'>

            <div className='relative mb-2 w-full'>
                <span className='text-sm text-sky-600 mb-1'>Length of Term</span>
                <div onClick={() => setShowItems(showItems === 1 ? 0 : 1)}
                    className='w-full h-8 border flex justify-between px-4 items-center'>
                    <p className='text-gray-600 text-sm'>{selectedLength ? selectedLength : "Select Option"}</p>
                    <img className='w-6' src={arrowDown} alt="" />
                </div>
                {
                    showItems === 1 && <div className='absolute z-50 top-14 border w-full max-h-44 overflow-y-auto'>
                        {
                            lengthItems?.map(item => (
                                <button onClick={() => handleSelectLenht(item)} className='w-full h-8 flex justify-start items-center bg-white hover:bg-gray-100 px-4'>
                                    <h1 className='text-sm'>{item}</h1>
                                </button>
                            ))
                        }
                    </div>
                }
            </div>

            <div className='relative mb-2 w-full'>
                <span className='text-sm text-sky-600 mb-1'>Underline Health Issue</span>
                <div onClick={() => setShowItems(showItems === 2 ? 0 : 2)}
                    className='w-full h-8 border flex justify-between px-4 items-center'>
                    <p className='text-gray-600 text-sm'>{selectedOption ? selectedOption : 'Select Option'}</p>
                    <img className='w-6' src={arrowDown} alt="" />
                </div>
                {
                    showItems === 2 && <div className='absolute z-50 top-14 border w-full max-h-44 overflow-y-auto'>
                        {
                            options?.map(item => (
                                <button onClick={() => handleSelectOption(item)} className='w-full h-8 flex justify-start items-center bg-white hover:bg-gray-100 px-4'>
                                    <h1 className='text-sm'>{item}</h1>
                                </button>
                            ))
                        }
                    </div>
                }
            </div>

            <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                <span className='text-sm text-sky-600 mb-1'>Your partner's gender</span>
                <div className='flex items-center gap-4'>
                    <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-sky-600 text-white'>
                        <span>Male</span>
                    </button><button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-gray-300 bg-white text-gray-500'>
                        <span>Female</span>
                    </button>
                </div>
            </div>

            <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                <span className='text-sm text-sky-600 mb-1'>Do your partner smoke?</span>
                <div className='flex items-center gap-4'>
                    <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-sky-600 text-white'>
                        <span>Yes</span>
                    </button><button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-gray-300 bg-white text-gray-500'>
                        <span>No</span>
                    </button>
                </div>
            </div>

            <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                <span className='text-sm text-sky-600 mb-1'>Your partner's employment status</span>
                <div className='flex items-center gap-4'>
                    <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-sky-600 text-white'>
                        <span>Slaried</span>
                    </button><button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-gray-300 bg-white text-gray-500'>
                        <span>Self Employed</span>
                    </button>
                </div>
            </div>

            <div className='flex flex-col justify-center items-start w-full'>
                <span className='text-sm text-sky-600 mb-1'>Age of your partner (in years)</span>
                <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                    type='number' name="age" placeholder="Ex: 22 Years" />
            </div>


        </div>
    );
};

export default TermMyPertnarForm;