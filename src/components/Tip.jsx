import React from 'react';

function Tip({ bill, tip, setTip, activeButton, setActiveButton }) {
    return (
        <div className='mt-[32px]'>
            <p className='text-preset-5 text-f-grey-500'>Select Tip %</p>
            <div className='grid  grid-cols-2 md:grid-cols-3 gap-[16px] mt-[8px] '>
                <button onClick={() => {
                    setTip((5 / 100) * bill);
                    setActiveButton('5%');

                }} className={`${activeButton === '5%' ? "bg-f-green-400" : "bg-f-green-900 focus:bg-f-green-400 hover:bg-f-green-200"} hover:cursor-pointer transition-colors duration-300 ease-in-out  rounded-[5px] text-preset-3 text-white py-[6px] `}>5%</button>
                <button onClick={() => {
                    setTip((10 / 100) * bill);
                    setActiveButton('10%');

                }} className={`${activeButton === '10%' ? "bg-f-green-400" : "bg-f-green-900 focus:bg-f-green-400 hover:bg-f-green-200"} hover:cursor-pointer transition-colors duration-300 ease-in-out  rounded-[5px] text-preset-3 text-white py-[6px] `}>10%</button>
                <button onClick={() => {
                    setTip((15 / 100) * bill);
                    setActiveButton('15%');

                }} className={`${activeButton === '15%' ? "bg-f-green-400" : "bg-f-green-900 focus:bg-f-green-400 hover:bg-f-green-200"} hover:cursor-pointer transition-colors duration-300 ease-in-out  rounded-[5px] text-preset-3 text-white py-[6px] `}>15%</button>
                <button onClick={() => {
                    setTip((25 / 100) * bill);
                    setActiveButton('25%');

                }} className={`${activeButton === '25%' ? "bg-f-green-400" : "bg-f-green-900 focus:bg-f-green-400 hover:bg-f-green-200"} hover:cursor-pointer transition-colors duration-300 ease-in-out  rounded-[5px] text-preset-3 text-white py-[6px] `}>25%</button>
                <button onClick={() => {
                    setTip((50 / 100) * bill);
                    setActiveButton('50%');

                }} className={`${activeButton === '50%' ? "bg-f-green-400" : "bg-f-green-900 focus:bg-f-green-400 hover:bg-f-green-200"} hover:cursor-pointer transition-colors duration-300 ease-in-out  rounded-[5px] text-preset-3 text-white py-[6px] `}>50%</button>
                <input onChange={(e) => {
                    setTip((e.target.value / 100) * bill);
                    setActiveButton(e.target.value);
                }} className='bg-f-grey-50 rounded-[5px] text-preset-3 text-f-grey-550 py-[6px] text-center outline-none focus:border-2 focus:border-f-green-400' placeholder='Custom'></input>

            </div>
        </div>
    )
}

export default Tip