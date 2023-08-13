import React from 'react'
import { MainAmount, AmountBox, BoxContainer, Title, Border } from './Styled'
import BoxAmount from '../BoxAmount/BoxAmount'
const Amount = () => {
    return (
        <MainAmount>
            <AmountBox>
                <Title>النسبة ما بين الذكور و الاناث في للمواليد</Title>
                <BoxContainer>
                    <BoxAmount img="images/female.svg" value={88} title={"اناث"} color={"#e0717b"} />
                    <BoxAmount img="images/male.svg" value={12} title={'ذكور'} color={"#0080c6"} />
                </BoxContainer>
            </AmountBox>
            <Border></Border>
            <AmountBox>
                <Title>النسبة ما بين الذكور و الاناث في للوفيات</Title>
                <BoxContainer>
                    <BoxAmount img="images/female.svg" value={88} title={"اناث"} color={"#8d7f86"} />
                    <BoxAmount img="images/male.svg" value={12} title={"ذكور"} color={"#8d7f86"} />
                </BoxContainer>
            </AmountBox>
        </MainAmount>
    )
}

export default Amount
