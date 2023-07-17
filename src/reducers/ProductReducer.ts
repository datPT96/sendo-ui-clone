import { FilterActionType } from './type'

interface Product {
    index: number
    type: string
    original_type?: string
    item?: {
        product_id: number
        name: string
        category_ids?: number[]
        category_id?: number
        shop_id?: number
        seller_admin_id?: number
        price: number
        max_price?: number
        final_price: number
        max_final_price?: number
        shop_warehouse_city_id?: number
        shop_warehouse_city?: string
        ship_method?: string[]
        uid?: string
        thumbnail_url: string
        original_img_url?: string
        min_price?: string
        price_range?: string
        original_price?: string
        promotion_sub_message?: {
            type?: string
            text?: string
            icon?: string
        }
        shop_name?: string
        button_text?: string
        buy_limit?: number
        promotion_percentage?: number
        quantity?: number
        remaining?: number
        order_count?: number
        order_count_text?: string
        app_discount_percentage?: number
        final_promotion_percent?: number
        promotion_percent_upto?: string
        is_shipping_supported?: boolean
        is_empty?: boolean
        has_video?: boolean
        is_shop_plus?: boolean
        is_in_promotion?: boolean
        img_highlight_urls?:
        {
            type: string
            url: string
        }[]
        shop_badge_urls?:
        {
            type?: string
            icon_url?: string
        }[]
        shop_badge_url?: string
        event_banners?:
        {
            type?: string
            image?: string
        }[]
    }
}

export type ProductState = Product[]

const { GET_FILTER_PRODUCT } = FilterActionType
type FilterAction = {
    type: typeof GET_FILTER_PRODUCT
    payload: Product[]
}

const filterReducer = (state: ProductState, action: FilterAction) => {
    switch (action.type) {
        case GET_FILTER_PRODUCT:
            return action.payload
        default:
            return state
    }
}

export { filterReducer }
