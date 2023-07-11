import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'

const Breadcrumb = () => {
    return (
        <div className="py-[16px]">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="none" fontSize={14} color={'#0f62fe'}>
                    Sendo.vn
                </Link>
                <Link underline="none" fontSize={14} color={'#0f62fe'} href="/">
                    Nhà cửa
                </Link>
                <Link underline="none" fontSize={14} color={'#0f62fe'} href="/">
                    Nội thất văn phòng làm việc
                </Link>
                <Link underline="none" fontSize={14} color={'#6f787e'}>
                    Ghế văn phòng
                </Link>
            </Breadcrumbs>
            <div className="flex gap-[8px] items-end mt-[8px]">
                <span className="text-[2rem] font-bold">Ghế văn phòng</span>
                <span className="text-base">Tìm thấy hơn 10.000 sản phẩm</span>
            </div>
        </div>
    )
}

export default Breadcrumb
