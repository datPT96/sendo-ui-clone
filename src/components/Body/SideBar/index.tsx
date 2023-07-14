import React from 'react'
import Category from './Categories/Category'
import Locations from './Locations'
import ShippingMethod from './ShippingMethod'
import ShopTypes from './ShopTypes'
import Discounts from './Discounts'
import LevelPrice from './LevelPrice'
import Ratting from './LevelRatting'
import OtherFilter from './OtherFilter'

const Sidebar = () => {
    return (
        <div className="bg-white rounded-[8px] mr-8 max-h-[90vh] min-h-[80vh] w-[20.6rem] overflow-x-hidden overflow-y-auto sticky top-[8rem]">
            <div>
                <Category />
                <Locations />
                <ShippingMethod />
                <ShopTypes />
                <Discounts />
                <LevelPrice />
                <Ratting />
                <OtherFilter />
            </div>
        </div>
    )
}

export default Sidebar
