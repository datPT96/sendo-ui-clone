import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

const Category = () => {
    const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div className="flex flex-col w-full px-[0.4rem] py-[1.2rem] text-base">
            <div className="flex items-center justify-between text-base font-bold ">
                <span className="ml-[1.2rem]">Danh mục</span>
                <button className="p-[0.7rem] hover:bg-gray rounded-[0.4rem]">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        className="w-[1.6rem]"
                    >
                        <path
                            fill="#6F787E"
                            fill-rule="nonzero"
                            d="M12 10.786 6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div>
                <Link to={'/'} className="text-blue px-[0.8rem] py-[1.2rem]">
                    Về trang tất cả danh mục
                </Link>
            </div>
            <List component={'div'}>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    <ListItemText primary="Nhà cửa" />
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary="Đồ dùng nhà bếp" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </div>
    )
}

export default Category
