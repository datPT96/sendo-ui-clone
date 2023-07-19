import { Button, TextField } from '@mui/material'
import React, { ChangeEvent } from 'react'

interface LevelFilterProp {
    gtprice?: string
    ltprice?: string
    onClick: () => void
    onLtpriceChange: (e: ChangeEvent<HTMLInputElement>) => void
    onGtpriceChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const LevelFilter = ({
    gtprice,
    ltprice,
    onClick,
    onLtpriceChange,
    onGtpriceChange,
}: LevelFilterProp) => {
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
                onClick={onClick}
            >
                Áp dụng
            </Button>
        </div>
    )
}

export default LevelFilter
