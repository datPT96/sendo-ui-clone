import React from 'react'

interface Locations {
    option_id: number
    option_name: string
}

interface SideBarSelectType {
    datas: Locations[]
}

const SideBarSelect = ({ datas }: SideBarSelectType) => {
    return (
        <div>
            <ul>
                {datas.map((location: Locations) => {
                    return (
                        <li className="cursor-pointer">
                            <div className="flex items-center hover:bg-gray pl-[1.2rem] pr-[0.8rem] py-[0.4rem]">
                                <input
                                    type="checkbox"
                                    name={location.option_name}
                                    id={location.option_name}
                                    value={location.option_id}
                                />
                                <label
                                    htmlFor={location.option_name}
                                    className="ml-[0.8rem] flex-1 cursor-pointer"
                                >
                                    {location.option_name}
                                </label>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBarSelect
