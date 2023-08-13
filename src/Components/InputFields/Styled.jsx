import { styled } from "styled-components";

export const Main = styled.div`
display: flex;
align-items:center;
padding-top: 25px;
@media screen and (max-width: 991px) {
   margin: 0px 12px;
  }
  @media screen and (max-width:767px) {
   flex-direction: column;
}
`

export const Wrapper = styled.div`
  padding: 25px;
  display: flex;
  @media screen and (max-width:991px) {
    padding: 25px 10px;
}
  @media screen and (max-width: 767px) {
    padding: 25px 10px;
  }
`;

export const Info = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  box-shadow: 10px 10px 19px #8f92a1;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const InfoTitle = styled.span`
  font-size: 17px;
  margin: 5px;
  @media screen and (max-width: 991px) {
    font-size: 15px;
  }
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`;
export const InfoDate = styled.div``;
export const SpanDate = styled.span`
  font-size: 13px;
  margin-right: 10px;
  @media screen and (max-width: 991px) {
    font-size: 13px;
    margin-right: 0px;
  }
  @media screen and (max-width: 767px) {
    font-size: 10px;
    margin-right: 0px;
  }
`;
export const InfoIcon = styled.span``;

export const Items = styled.div``;

export const Item = styled.div``;






export const BoxContainer = styled.div`
display: flex;
box-shadow: 10px 10px 19px #8f92a1;
border-radius: 10px;
  justify-content: space-around;
  height: 50px;
`

export const Box = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color:${props=>props.color};
border-radius: 10px;
width: 100px;
@media screen and (max-width: 991px) {
    width: 75px;
  }
@media screen and (max-width:767px) {
    width: 60px;
}


`


export const BoxSpan = styled.span`
color:${props=>props.color};
`


export const BoxTitle = styled.span`
margin-right:10px;
@media screen and (max-width:767px) {
   font-size:12px;
}
`