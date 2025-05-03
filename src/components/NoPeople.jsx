import React from 'react';

function NoPeople({ numPeople, setNumPeople, alert, setAlert }) {
    return (
        <div className='mt-[32px]'>
            <div className='md:flex justify-between'>
                <p className='text-preset-5 text-f-grey-500'>Number of People</p>
                {alert === true && <p className='text-preset-5 text-f-orange-400'>Can't be Zero</p>}
            </div>
            <div className='relative mt-[8px]'>
                <img className='absolute left-[17px] top-1/2 transform -translate-1/2' src='./images/icon-person.svg' alt='person icon'></img>
                <input onChange={(e) => {
                    setNumPeople(e.target.value);
                    setAlert(false);

                }} type='number' placeholder='0' value={numPeople} className={`bg-f-grey-50 w-full rounded-[5px] px-[17px] py-[6px] text-right text-preset-3 text-f-green-900/35 outline-none focus:border-2 focus:border-f-green-400 ${alert === true && "border-2 border-f-orange-400"}`} ></input>
            </div>
        </div>
    )
}

export default NoPeople