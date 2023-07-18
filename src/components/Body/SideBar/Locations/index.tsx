import React, {
    useState,
    ChangeEvent,
    useCallback,
    useContext,
    useEffect,
} from 'react'
import SideBarSelect from '../SideBarSelect'
import { locations } from '@/data/filterList'
import { Action, ActionContext } from '@/contexts/ActionContext'

const Locations = () => {
    const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }

    const { actions, addAction } = useContext(ActionContext)

    const [checkedItem, setCheckedItem] = useState<string[]>([])

    const handleCheck = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            let newCheckedItem: string[] = [...checkedItem]
            let value = e.target.value
            console.log(value)
            if (newCheckedItem.includes(value)) {
                var index = newCheckedItem.indexOf(value)
                if (index > -1) {
                    newCheckedItem.splice(index, 1)
                }
            } else {
                newCheckedItem.push(value)
            }
            setCheckedItem(newCheckedItem)
        },
        [checkedItem],
    )

    useEffect(() => {
        addAction('location', checkedItem)
    }, [checkedItem])

    return (
        <div className="flex flex-col w-full px-[0.4rem] py-[1.2rem] text-base">
            <div className="flex items-center justify-between text-base font-bold ">
                <span className="ml-[1.2rem]">Địa điểm</span>
                <button
                    className="p-[0.7rem] hover:bg-gray rounded-[0.4rem]"
                    onClick={() => handleClick()}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        className={`w-[1.6rem] ${open ? '' : 'rotate-180'}`}
                    >
                        <path
                            fill="#6F787E"
                            fillRule="nonzero"
                            d="M12 10.786 6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                        ></path>
                    </svg>
                </button>
            </div>
            {open && <SideBarSelect datas={locations} onClick={handleCheck} />}
            <hr></hr>
        </div>
    )
}

export default Locations
