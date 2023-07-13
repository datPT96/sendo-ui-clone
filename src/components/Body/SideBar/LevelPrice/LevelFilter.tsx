import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const LevelFilter = () => {
    const [gtprice, setGtprice] = useState()
    const [ltprice, setLtprice] = useState()

    const onGtpriceChange = (e: any) => {
        setGtprice(e.target.value)
    }

    const onLtpriceChange = (e: any) => {
        setLtprice(e.target.value)
    }
    return (
        <div className="flex flex-col py-[0.8rem]">
            <div className="flex gap-2 items-center">
                <TextField
                    size="small"
                    type="number"
                    value={gtprice}
                    onChange={onGtpriceChange}
                />
                <div>-</div>
                <TextField
                    size="small"
                    type="number"
                    value={ltprice}
                    onChange={onLtpriceChange}
                />
            </div>
            <Button
                variant="contained"
                sx={{
                    marginTop: 0.8,
                    padding: '4px 8px',
                    backgroundColor: '#ee2624',
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: 12,
                    '&:hover': {
                        opacity: 0.8,
                        backgroundColor: '#ee2624',
                    },
                }}
                disableRipple
                disabled={gtprice || ltprice ? false : true}
            >
                Áp dụng
            </Button>
        </div>
    )
}

export default LevelFilter
