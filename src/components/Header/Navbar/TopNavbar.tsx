import React, { useState } from 'react'

const TopNavbar = () => {
    const [qrShow, setQrShow] = useState(false)

    const doShowCode = () => {
        setQrShow(!qrShow)
    }
    return (
        <>
            <div className="top-nav flex items-center bg-topRed">
                <ul className="top-list flex container px-[24px] ">
                    <li className="list-item relative">
                        <span
                            className="list-btn flex items-center text-sm mr-[24px] font-bold text-white cursor-pointer"
                            onClick={doShowCode}
                        >
                            Tải ứng dụng
                        </span>
                        {qrShow && (
                            <div className="qr-code flex flex-col items-center bg-white p-[8px] rounded-md fixed top-10 z-40 cursor-pointer">
                                <img
                                    src="https://media3.scdn.vn/img2/2018/5_23/R842FO.png"
                                    alt="qr-code"
                                />
                                <span>Quét để tải ứng dụng</span>
                            </div>
                        )}
                    </li>
                    <li className="list-item relative">
                        <span className="list-btn flex items-center text-sm mr-[24px] font-bold text-white">
                            Chăm sóc khách hàng
                        </span>
                        {/* <div className="bg-white absolute top-10">
                            <div>Trung tâm hỗ trợ</div>
                            <div>Trả hàng hoàn tiền</div>
                        </div> */}
                    </li>
                    <li className="list-item">
                        <span className="list-btn flex items-center text-sm mr-[24px] font-bold text-white">
                            Kiểm tra đơn hàng
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TopNavbar
