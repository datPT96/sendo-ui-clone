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
