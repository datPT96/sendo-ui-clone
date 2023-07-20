import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MultiLevelMenus from './MultiLevelMenus'
import categoriesList from '@/data/categoriesList'

const Category = () => {
    const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div className="stretch-content flex-col px-[0.4rem] py-[1.2rem] text-base">
            <div className="stretch-content items-center justify-between text-base font-bold ">
                <span className="ml-[1.2rem]">Danh mục</span>
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
                        className={`w-[1.8rem] h-[1.8rem] ${
                            !open ? 'rotate-180' : ''
                        }`}
                    >
                        <path
                            fill="#6F787E"
                            fillRule="nonzero"
                            d="M12 10.786 6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div
                className={`stretch-content categories-css flex-col flex-wrap 
                ${open ? '' : 'hidden'}`}
            >
                <Link
                    to={'/'}
                    className="text-blue leading-[1.4rem] px-[1.2rem] py-[0.8rem]"
                >
                    Về trang tất cả danh mục
                </Link>
                <MultiLevelMenus datas={categoriesList} />
            </div>
            <hr></hr>
        </div>
    )
}

export default Category
