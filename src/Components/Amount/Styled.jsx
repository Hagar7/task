import { styled } from "styled-components";


export const MainAmount = styled.section`
padding:30px 25px 25px ;
width: 90%;
margin:auto;
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 991px) {
   flex-direction: column;
   width: 100%;
   padding:30px 15px 25px ;
  }
  @media screen and (max-width:767px) {
   flex-direction: column;
   width: 100%;
   padding:30px 10px 25px ;
}
`




export const AmountBox = styled.div`
background-color: #ffffff;
border-radius: 20px;
padding: 20px;
width: 45%;
@media screen and (max-width: 991px) {
   width: 100%;
   margin-bottom: 15px;
  }
  @media screen and (max-width:767px) {
    width: 100%;
    margin-bottom: 15px;
}

`


export const BoxContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
  @media screen and (max-width:767px) {
  flex-direction: column;
  
}
`



export const Title = styled.h3`
font-size: 16px;
color: #34383a;
text-align: center;
margin:15px 0;

`



export const Border = styled.div`
height: 300px;
background-color:#696974;
width:1px;
@media screen and (max-width: 991px) {
  display: none;
  }

`