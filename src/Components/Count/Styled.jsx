import { styled } from "styled-components";




export const MainCount = styled.section`
padding:45px 0px 25px ;
width: 85%;
margin:auto;
`


export const BoxContainer = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 991px) {
  flex-direction: column;
  }
  @media screen and (max-width:767px) {
   flex-direction: column;
}
`




export const Box = styled.div`
background-color:#ffffff;
border-radius: 20px;
width: 28%;
display: flex;
align-items: center;
height: 120px;

@media screen and (max-width: 991px) {
  width: 100%;
  margin-bottom: 15px;
  }
  @media screen and (max-width:767px) {
    width: 100%;
    margin-bottom: 15px;
}




`




export const Icon = styled.div`
color:${props => props.color};
display: flex;
align-items: center;
margin-right: 10px;


`



export const Info = styled.div`
text-align: center;
margin-right: 25px;
@media screen and (max-width:1024px) {
  text-align: right;

}
  @media screen and (max-width:767px) {
    margin-right: 0px;

}
`




export const Title = styled.h2`
font-size: 30px;

  @media screen and (max-width:767px) {
    font-size: 20px;
}
`





export const Description = styled.span`
font-size: 18px;
color:#696974;

  @media screen and (max-width:767px) {
    font-size: 14px;
}
`

