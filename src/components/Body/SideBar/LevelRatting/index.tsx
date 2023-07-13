import React, { useState } from 'react'
import RattingRangeList from './RattingRangeList'
import { level_ratting } from '@/data/filterList'

const Ratting = () => {
    const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div className="flex flex-col w-full px-[0.4rem] py-[1.2rem] text-base">
            <div className="flex items-center justify-between text-base font-bold ">
                <span className="ml-[1.2rem]">Đánh giá</span>
                <button
                    className="p-[0.7rem] hover:bg-gray rounded-[0.4rem]"
                    onClick={() => handleClick()}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        className={`w-[1.6rem] ${!open ? 'rotate-180' : ''}`}
                    >
                        <path
                            fill="#6F787E"
                            fillRule="nonzero"
                            d="M12 10.786 6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                        ></path>
                    </svg>
                </button>
            </div>
            {open && (
                <div className="px-[1.2rem]">
                    <RattingRangeList datas={level_ratting} />
                </div>
            )}
            <hr></hr>
        </div>
    )
}

export default Ratting
