import React from 'react'
import {Box,BoxTitle,BoxImage,BoxPercentage,Image} from './Styled'

const BoxAmount = ({img,value,title,color}) => {

    return (
        <Box>
            <BoxTitle>{title}</BoxTitle>
            <BoxImage img={img} value={value} color={color}>
                <Image src={img} style={{width:"100%"}}/>
            </BoxImage>
            <BoxPercentage>{value}%</BoxPercentage>
        </Box>
    )
}

export default BoxAmount
