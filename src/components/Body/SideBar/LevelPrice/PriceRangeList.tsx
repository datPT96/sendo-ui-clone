import React, { useState, useContext, Dispatch } from 'react'
import { LevelPrice } from '@/data/type'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { ProductContext } from '@/contexts/ProductContext'

interface LevelPriceSelectType {
    datas: LevelPrice[]
    setGtprice: Dispatch<React.SetStateAction<string>>
    setLtprice: Dispatch<React.SetStateAction<string>>
}

const PriceRangeList = ({
    datas,
    setGtprice,
    setLtprice,
}: LevelPriceSelectType) => {
    const [open, setOpen] = useState(false)
    const { filterByPrice } = useContext(ProductContext)

    const hanldeClick = () => {
        setOpen(!open)
    }

    const findInRange = (gtprice: string, ltprice: string) => {
        filterByPrice(gtprice, ltprice)
        setGtprice(gtprice)
        setLtprice(ltprice)
    }

    return (
        <div className="flex flex-col ml-[0.8rem] items-stretch">
            {!open
                ? datas.map((item: any, index) => {
                      if (index > 3) {
                          return null
                      }
                      return (
                          <span
                              key={index}
                              onClick={() => {
                                  item.gtprice === '-1'
                                      ? findInRange(item.ltprice, '')
                                      : item.gtprice !== '-1' &&
                                        item.ltprice !== '-1'
                                      ? findInRange(item.gtprice, item.ltprice)
                                      : findInRange('', item.gtprice)
                              }}
                              className="bg-gray hover:font-bold cursor-pointer rounded-[0.4rem] px-[0.8rem] py-[0.6rem] mb-[0.8rem]"
                          >
                              {item.gtprice === '-1'
                                  ? `Duoi ${item.ltprice}`
                                  : item.gtprice !== '-1' &&
                                    item.ltprice !== '-1'
                                  ? `${item.gtprice} - ${item.ltprice}`
                                  : `Tren ${item.gtprice}`}
                          </span>
                      )
                  })
                : datas.map((item: any, index) => {
                      return (
                          <span
                              key={index}
                              onClick={() => {
                                  item.gtprice === '-1'
                                      ? findInRange(item.ltprice, '')
                                      : item.gtprice !== '-1' &&
                                        item.ltprice !== '-1'
                                      ? findInRange(item.gtprice, item.ltprice)
                                      : findInRange('', item.gtprice)
                              }}
                              className="bg-gray hover:font-bold cursor-pointer rounded-[0.4rem] px-[0.8rem] py-[0.6rem] mb-[0.8rem]"
                          >
                              {item.gtprice === '-1'
                                  ? `Duoi ${item.ltprice}`
                                  : item.gtprice !== '-1' &&
                                    item.ltprice !== '-1'
                                  ? `${item.gtprice} - ${item.ltprice}`
                                  : `Tren ${item.gtprice}`}
                          </span>
                      )
                  })}
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
        </div>
    )
}

export default PriceRangeList
