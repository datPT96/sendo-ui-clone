import {
    Box,
    ListItemIcon,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CheckIcon from '@mui/icons-material/Check'
import React, { useState } from 'react'

const selectType = [
    {
        label: 'Đề cử',
        value: 'de-cu',
    },
    {
        label: 'Bán chạy',
        value: 'ban-chay',
    },
    {
        label: 'Khuyến mãi',
        value: 'khuyen-mai',
    },
    {
        label: 'Đánh giá tốt',
        value: 'danh-gia-tot',
    },
]

const Options = styled(MenuItem)(({ theme }) => ({
    justifyContent: 'space-between',
    fontSize: 14,
    '& .MuiSvgIcon-root': {
        color: '#ee2624',
        marginRight: theme.spacing(0),
        fontSize: 24,
    },
}))

const SortProduct = () => {
    const [option, setOption] = useState('Đề cử')

    const onSelectChange = (e: SelectChangeEvent) => {
        setOption(e.target.value as string)
    }

    return (
        <div className="flex items-center">
            <Typography fontSize={14}>Sắp xếp theo:</Typography>
            <Select
                size="small"
                sx={{
                    marginLeft: '8px',
                    '& .MuiInputBase-input': {
                        display: 'flex',
                        alignItems: 'center',
                        minWidth: 120,
                        fontSize: 14,
                    },
                }}
                IconComponent={KeyboardArrowDownIcon}
                value={option}
                onChange={onSelectChange}
                displayEmpty
                renderValue={() => <Box>{option}</Box>}
            >
                {selectType.map((item, index) => (
                    <Options key={index} value={item.label}>
                        <span>{item.label}</span>
                        {option === item.label ? <CheckIcon /> : ''}
                    </Options>
                ))}
            </Select>
        </div>
    )
}

export default SortProduct
