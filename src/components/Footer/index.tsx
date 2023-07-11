import { Link } from 'react-router-dom'
import TopSearch from './TopSearch'

function Footer() {
    return (
        <footer>
            <section className="lg:container px-[24px]">
                <div className="grid grid-cols-2 lg:grid-cols-4 p-[16px]">
                    <Link
                        to={''}
                        className="flex flex-col items-center leading-[1.6rem] py-[8px]"
                    >
                        <div className="w-[130px] h-[88px] mb-[12px]">
                            <img
                                src="https://media3.scdn.vn/img4/2020/12_16/gJwXr6FFZKZCGKWaz4RB.png"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center w-[210px]">
                            <span className="font-bold text-sm mb-[4px]">
                                Siêu nhiều hàng tốt
                            </span>
                            <span className="text-sm text-center text-[#6f787e]">
                                Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm
                            </span>
                        </div>
                    </Link>
                    <Link
                        to={''}
                        className="flex flex-col items-center leading-[1.6rem] py-[8px]"
                    >
                        <div className="w-[130px] h-[88px] mb-[12px]">
                            <img
                                src="https://media3.scdn.vn/img4/2020/12_16/EfZWQVfV6nQzu2vMmnwC.png"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center w-[210px]">
                            <span className="font-bold text-sm mb-[4px]">
                                Siêu yên tâm
                            </span>
                            <span className="text-sm text-center text-[#6f787e]">
                                Miễn phí đổi trả 48h
                            </span>
                        </div>
                    </Link>
                    <Link
                        to={''}
                        className="flex flex-col items-center leading-[1.6rem] py-[8px]"
                    >
                        <div className="w-[130px] h-[88px] mb-[12px]">
                            <img
                                src="https://media3.scdn.vn/img4/2020/12_16/j5C6IQz7gIXPgjFJxmRz.png"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center w-[210px]">
                            <span className="font-bold text-sm mb-[4px]">
                                Siêu tiện lợi
                            </span>
                            <span className="text-sm text-center text-[#6f787e]">
                                Mang thế giới mua sắm của Sendo trong tầm tay
                                bạn
                            </span>
                        </div>
                    </Link>
                    <Link
                        to={''}
                        className="flex flex-col items-center leading-[1.6rem] py-[8px]"
                    >
                        <div className="w-[130px] h-[88px] mb-[12px]">
                            <img
                                src="https://media3.scdn.vn/img4/2020/12_16/7AJFQGQ5qvS7gGOz8P7a.png"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center w-[210px]">
                            <span className="font-bold text-sm mb-[4px]">
                                Siêu tiết kiệm
                            </span>
                            <span className="text-sm text-center text-[#6f787e]">
                                Giá hợp lý, vừa túi tiền. Luôn có nhiều chương
                                trình khuyến mãi
                            </span>
                        </div>
                    </Link>
                </div>
            </section>
            <section className="py-[24px] bg-gray">
                <div className="sm:container flex items-start text-sm leading-[1.6rem] px-[24px]">
                    <div className="basis-1/4">
                        <div className="font-bold mb-[12px]">VỀ CHÚNG TÔI</div>
                        <ul>
                            <li className="mb-[0.8rem]">
                                <Link to={''}>Giới thiệu Sendo.vn</Link>
                            </li>
                            <li className="mb-[0.8rem]">
                                <Link to={''}>Giới thiệu SenMall</Link>
                            </li>
                            <li className="mb-[0.8rem]">
                                <Link to={''}>Quy chế hoạt động</Link>
                            </li>
                            <li className="mb-[0.8rem]">
                                <Link to={''}>Chính sách bảo mật</Link>
                            </li>
                            <li className="mb-[0.8rem]">
                                <Link to={''}>Giao hàng và Nhận hàng</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="basis-1/4">
                        <div className="font-bold mb-[12px]">
                            DÀNH CHO NGƯỜI MUA
                        </div>
                        <ul>
                            <li className="mb-[0.8rem]">
                                <Link to={''}>Giải quyết khiếu nại</Link>
                            </li>
                            <li className="mb-[0.8rem]">
                                <Link to={''}>Hướng dẫn mua hàng</Link>
                            </li>
                            <li className="mb-[0.8rem]">
                                <Link to={''}>Chính sách đổi trả</Link>
                            </li>
                            <li className="mb-[0.8rem]">
                                <Link to={''}>Chăm sóc khách hàng</Link>
                            </li>
                            <li className="mb-[0.8rem]">
                                <Link to={''}>Nạp tiền điện thoại</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="basis-1/4">
                        <div className="font-bold mb-[12px]">
                            DÀNH CHO NGƯỜI BÁN
                        </div>
                        <ul>
                            <li className="mb-[0.8rem]">
                                <Link to={''}>Quy định đối với người bán</Link>
                            </li>
                            <li className="mb-[0.8rem]">
                                <Link to={''}>Chính sách bán hàng</Link>
                            </li>
                            <li className="mb-[0.8rem]">
                                <Link to={''}>
                                    Hệ thống tiêu chí kiểm duyệt
                                </Link>
                            </li>
                            <li className="">
                                <Link to={''}>Mở shop trên Sendo</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="basis-1/4">
                        <div className="font-bold mb-[12px]">
                            TẢI ỨNG DỤNG SENDO
                        </div>
                        <ul>
                            <li className="mb-[0.8rem] max-w-[20rem]">
                                Mang thế giới mua sắm của Sendo trong tầm tay
                                bạn
                            </li>
                            <li className="flex flex-wrap gap-[0.8rem] mt-[0.8rem]">
                                <div className="w-[120px]">
                                    <Link to={''}>
                                        <img
                                            src="https://media3.scdn.vn/img4/2020/12_16/5lUTWdk3DXr8nlC9MDII.png"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="w-[120px]">
                                    <Link to={''}>
                                        <img
                                            src="https://media3.scdn.vn/img4/2021/10_26/0ZARLASzVrfL92924rzW.png"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="w-[120px]">
                                    <Link to={''}>
                                        <img
                                            src="https://media3.scdn.vn/img4/2021/03_19/AMV086JNpEbm4OGAvVng.png"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bottom-footer bg-[#27343e] text-white py-[24px]">
                <div className="lg:container flex justify-between px-[24px]">
                    <ul className="text-sm basis-2/5 w-2/5">
                        <li className="font-bold mb-[12px]">
                            Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập
                            đoàn FPT
                        </li>
                        <li className="mb-[16px]">
                            Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa
                            đổi lần thứ 20, ngày 26/04/2022.
                        </li>
                        <li className="mb-[16px]">
                            Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.
                        </li>
                        <li className="mb-[16px]">
                            Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp,
                            Lô D.01, Đường Tân Thuận, Khu chế xuất Tân Thuận,
                            Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí
                            Minh, Việt Nam.
                        </li>
                        <li>Email: lienhe@sendo.vn</li>
                        <li className="flex gap-[2rem] mt-[12px]">
                            <div className="max-w-[108px]">
                                <Link to={''}>
                                    <img
                                        src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="max-w-[108px]">
                                <Link to={''}>
                                    <img
                                        src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </li>
                    </ul>
                    <div className="basis-1/2 w-2/5">
                        <ul className="text-sm">
                            <li className="mb-[12px]">
                                <span className="font-bold">
                                    Đăng ký nhận bản tin ưu đãi khủng từ Sendo
                                </span>
                            </li>
                            <li>
                                <form action="" className="flex gap-1">
                                    <input
                                        className="basis-1/2 w-[50%] text-base text-black leading-[1.4rem] p-[0.8rem] rounded-[4px] outline-none"
                                        type="text"
                                        placeholder="Email của bạn là"
                                    />
                                    <button className="flex justify-center items-center border-red rounded-[4px] font-bold px-[16px] py-[6px] bg-red w-[17%]">
                                        <span className="leading-[1.29rem] text-base">
                                            Đăng ký
                                        </span>
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <TopSearch />
        </footer>
    )
}

export default Footer
