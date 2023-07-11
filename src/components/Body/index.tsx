import React from 'react'
import Breadcrumb from './Breadcrumb'
import Sidebar from './SideBar'
import Contents from './Content'

const Body = () => {
    return (
        <main>
            <div className="bg-gray min-h-screen w-full">
                <div className="container px-[24px]">
                    <Breadcrumb />
                    <div className="flex">
                        <Sidebar />
                        <div>
                            <Contents />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Body
