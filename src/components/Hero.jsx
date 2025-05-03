import React, { useEffect, useState } from 'react';
import NoPeople from './NoPeople';
import Tip from './Tip';

function Hero() {
    const [bill, setBill] = useState('');

    const [tip, setTip] = useState(0);
    const [activeButton, setActiveButton] = useState(null);

    const [numPeople, setNumPeople] = useState('');

    const [alert, setAlert] = useState(false);


    const tipPerPerson = Number(tip) / Number(numPeople);
    const totPerPerson = Number(bill) / Number(numPeople);

    useEffect(() => {
        if (activeButton && !numPeople) {
            setAlert(true);
        } else {
            setAlert(false);
        }
    }, [activeButton, alert]);

    const handleReset = function () {
        setActiveButton(null);
        setBill('');
        setNumPeople('');
    }



    return (
        <div className='bg-white px-[24px] md:px-[80px] py-[32px] md:py-[48px] xl:p-[32px] rounded-t-2xl md:rounded-2xl w-full'>
            <form onSubmit={(e) => e.preventDefault()} onReset={handleReset}>
                <div className='xl:flex xl:gap-[48px]'>
                    <div className='px-[8px] md:px-0 xl:py-[16px] xl:flex-1'>
                        <div>
                            <p className='text-preset-5 text-f-grey-550'>Bill</p>
                            <div className=' relative mt-[8px] '>
                                <img
                                    src='./images/icon-dollar.svg' alt='dollar icon'
                                    className='absolute left-[16px] top-1/2 transform -translate-1/2 '
                                ></img>

                                <input
                                    type='number' placeholder='0' value={bill} onChange={(e) => setBill(e.target.value)}
                                    className='bg-f-grey-50 rounded-[5px] px-[17px] py-[6px] text-right w-full text-preset-3 text-f-green-900/35 focus:text-f-green-900 focus:border-2 focus:border-f-green-400 outline-none '
                                ></input>

                            </div>
                        </div>
                        <Tip bill={bill} tip={tip} setTip={setTip} activeButton={activeButton} setActiveButton={setActiveButton} />
                        <NoPeople numPeople={numPeople} setNumPeople={setNumPeople} alert={alert} setAlert={setAlert} />


                    </div>
                    <div className='bg-f-green-900 rounded-[15px] p-[24px] mt-[32px] xl:mt-0 xl:flex-1 xl:flex xl:flex-col xl:justify-between'>
                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-preset-5 text-white'>Tip Amount</p><p className='text-preset-6 text-f-grey-400'>/ person</p>
                                </div>
                                <p className='text-f-green-400 text-preset-2'>${numPeople ? tipPerPerson.toFixed(2) : '0.00'}</p>
                            </div>
                            <div className='flex justify-between mt-[24px]'>
                                <div>
                                    <p className='text-preset-5 text-white'>Total</p><p className='text-preset-6 text-f-grey-400'>/ person</p>
                                </div>
                                <p className='text-f-green-400 text-preset-2'>${numPeople ? totPerPerson.toFixed(2) : '0.00'}</p>
                            </div>
                        </div>
                        <button type='reset' className={` rounded-[5px] w-full text-preset-4 text-f-green-800 px-[32px] py-[9px] mt-[32px] ${numPeople ? "bg-f-green-400 hover:cursor-pointer hover:bg-f-green-200 transition-colors duration-300 ease-in-out" : "bg-f-green-750"} `}>RESET</button>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Hero