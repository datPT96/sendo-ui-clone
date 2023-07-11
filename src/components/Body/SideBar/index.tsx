import React from 'react'
import Category from './Categories/Category'

const Sidebar = () => {
    return (
        <div className="bg-white rounded-[8px] mr-8 max-h-[90vh] min-h-[80vh] w-[20.6rem] overflow-x-hidden overflow-y-auto">
            <div>
                <Category />
            </div>
        </div>
    )
}

export default Sidebar
