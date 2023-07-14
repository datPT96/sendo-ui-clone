import React from 'react'
import Breadcrumb from './Breadcrumb'
import Sidebar from './SideBar'
import Contents from './Content'

const Body = () => {
    return (
        <main className="relative">
            <div className="bg-gray min-h-screen w-full pb-[2.4rem]">
                <div className="container px-[24px] mb-[8px]">
                    <Breadcrumb />
                    <div className="flex">
                        <Sidebar />
                        <div className="flex-1">
                            <Contents />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Body
