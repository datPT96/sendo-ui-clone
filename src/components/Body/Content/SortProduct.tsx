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
    '& .MuiSvgIcon-root': {
        marginRight: theme.spacing(1),
    },
}))

const SortProduct = () => {
    const [option, setOption] = useState('de-cu')

    const onSelectChange = (e: SelectChangeEvent) => {
        e.preventDefault()
        setOption(e.target.value as string)
    }

    return (
        <Box sx={{ minWidth: 120, display: 'flex', alignItems: 'center' }}>
            <Typography fontSize={14}>Sắp xếp theo:</Typography>
            <Select
                size="small"
                sx={{
                    marginLeft: '8px',
                    '& .MuiInputBase-input': {
                        minWidth: 120,
                        fontSize: 12,
                    },
                }}
                IconComponent={KeyboardArrowDownIcon}
                value={option}
                onChange={onSelectChange}
            >
                {selectType.map((item, index) => (
                    <Options
                        key={index}
                        value={item.value}
                        sx={{ fontSize: 12 }}
                    >
                        {item.label}
                        {option === item.value ? <CheckIcon /> : ''}
                    </Options>
                ))}
            </Select>
        </Box>
    )
}

export default SortProduct
