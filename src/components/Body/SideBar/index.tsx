import { Divider } from '@mui/material'

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
        <div className="sidebar-css">
            <div className="block">
                <Category />
                <Divider className="h-[1px]" />
                <Locations />
                <Divider className="h-[1px]" />
                <ShippingMethod />
                <Divider className="h-[1px]" />
                <ShopTypes />
                <Divider className="h-[1px]" />
                <Discounts />
                <Divider className="h-[1px]" />
                <LevelPrice />
                <Divider className="h-[1px]" />
                <Ratting />
                <Divider className="h-[1px]" />
                <OtherFilter />
                <Divider className="h-[1px]" />
            </div>
        </div>
    )
}

export default Sidebar
