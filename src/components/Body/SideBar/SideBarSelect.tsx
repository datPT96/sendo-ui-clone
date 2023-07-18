import ActionContextProvider, { ActionContext } from '@/contexts/ActionContext'
import { Discounts, Locations, ShippingMethod, otherFilter } from '@/data/type'
import {
    FormControlLabel,
    FormGroup,
    Checkbox,
    Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'
// import { styled } from '@mui/material/styles'
import React, { useState, ChangeEvent } from 'react'

interface SideBarSelectType {
    datas: Locations[] | ShippingMethod[] | Discounts[] | otherFilter[]
    onClick: (e: ChangeEvent<HTMLInputElement>) => void
}

// const BoxIcon = styled('span')(({ theme }) => ({
//     borderRadius: 3,
//     width: 16,
//     height: 16,
//     boxShadow: 'inset 0 0 0 2px #6f787e, inset 0 -1px 0 #6f787e',
// }))
// const CheckedIcon = styled(BoxIcon)({
//     backgroundColor: '#ee2624',
//     '&:before': {
//         display: 'block',
//         width: 16,
//         height: 16,
//         backgroundImage:
//             "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
//             " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
//             "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
//         content: '""',
//     },
// })

const SideBarSelect = ({ datas, onClick }: SideBarSelectType) => {
    const [open, setOpen] = useState(false)

    const onCheck = onClick
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <FormGroup>
            {!open
                ? datas.map((item: any, index) => {
                      if (index > 3) {
                          return null
                      }
                      return (
                          <FormControlLabel
                              key={index}
                              control={
                                  <Checkbox
                                      value={item?.search_key}
                                      sx={{
                                          '&.MuiButtonBase-root': {
                                              padding: 0,
                                          },
                                          '& .MuiSvgIcon-root': {
                                              fontSize: 22,
                                          },
                                          color: '#6f787e',
                                          '&.Mui-checked': {
                                              color: red[600],
                                          },
                                      }}
                                      disableRipple
                                      onChange={onCheck}
                                  />
                              }
                              label={
                                  <Typography
                                      variant="caption"
                                      fontSize={14}
                                      noWrap={true}
                                      align="center"
                                  >
                                      {item.option_name}
                                  </Typography>
                              }
                              sx={{
                                  '&.MuiFormControlLabel-root': {
                                      width: '100%',
                                      marginLeft: 0.8,
                                      marginRight: 0,
                                      borderRadius: 0.8,
                                      padding: '4px 8px',
                                  },
                                  '&:hover': {
                                      backgroundColor: '#f2f3f4',
                                      fontWeight: 'bold',
                                  },
                              }}
                          />
                      )
                  })
                : datas.map((item: any, index) => {
                      return (
                          <FormControlLabel
                              key={index}
                              control={
                                  <Checkbox
                                      value={item?.search_key}
                                      sx={{
                                          '&.MuiButtonBase-root': {
                                              padding: 0,
                                          },
                                          '& .MuiSvgIcon-root': {
                                              fontSize: 22,
                                          },
                                          color: '#6f787e',
                                          '&.Mui-checked': {
                                              color: red[600],
                                          },
                                      }}
                                      disableRipple
                                      onChange={onCheck}
                                  />
                              }
                              label={
                                  <Typography
                                      variant="caption"
                                      fontSize={14}
                                      noWrap={true}
                                      align="center"
                                  >
                                      {item.option_name}
                                  </Typography>
                              }
                              sx={{
                                  '&.MuiFormControlLabel-root': {
                                      width: '100%',
                                      marginLeft: 0.8,
                                      marginRight: 0,
                                      borderRadius: 0.8,
                                      padding: '4px 8px',
                                  },
                                  '&:hover': {
                                      backgroundColor: '#f2f3f4',
                                      fontWeight: 'bold',
                                  },
                              }}
                          />
                      )
                  })}
            {datas.length > 4 && (
                <button
                    onClick={handleClick}
                    className="flex items-center justify-center "
                >
                    <span className="hover:bg-gray font-bold px-[0.8rem] py-[0.4rem]">
                        {!open ? '+ Xem them' : '- Thu gon'}
                    </span>
                </button>
            )}
        </FormGroup>
    )
}

export default SideBarSelect
