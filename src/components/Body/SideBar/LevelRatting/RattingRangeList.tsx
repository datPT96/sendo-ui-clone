import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import React, { useState } from 'react'

import { LevelRatting } from '@/data/type'

interface RattingProps {
    datas: LevelRatting[]
}

const RattingRangeList = ({ datas }: RattingProps) => {
    const [open, setOpen] = useState(false)

    const hanldeClick = () => {
        setOpen(!open)
    }

    return (
        <div className="flex flex-col ml-[0.8rem] items-stretch">
            {!open
                ? datas.map((item, index) => {
                      if (index > 3) {
                          return null
                      }
                      return (
                          <span
                              key={index}
                              className="bg-gray hover:font-bold cursor-pointer rounded-[0.4rem] px-[0.8rem] py-[0.6rem] mb-[0.8rem]"
                          >
                              {item.option_name}
                          </span>
                      )
                  })
                : datas.map((item, index) => {
                      return (
                          <span
                              key={index}
                              className="bg-gray hover:font-bold cursor-pointer rounded-[0.4rem] px-[0.8rem] py-[0.6rem] mb-[0.8rem]"
                          >
                              {item.option_name}
                          </span>
                      )
                  })}
            {datas.length > 3 && (
                <Button
                    onClick={hanldeClick}
                    sx={{
                        alignSelf: 'center',
                        width: 'fit-content',
                        fontWeight: 700,
                        fontSize: 12,
                        color: 'black',
                        '&:hover': { backgroundColor: '#f2f3f4' },
                    }}
                >
                    {!open ? (
                        <span>
                            <AddIcon /> Xem them
                        </span>
                    ) : (
                        <span>
                            <RemoveIcon /> Thu gon
                        </span>
                    )}
                </Button>
            )}
        </div>
    )
}

export default RattingRangeList
