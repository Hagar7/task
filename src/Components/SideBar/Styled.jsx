import { styled } from "styled-components";

export const SideContainer = styled.aside`
  background-color: #ffffff;
  position: fixed;
  min-height: 100vh;
  right: 0px;
  top: 0px;
  width: 16%;
  @media screen and (max-width: 991px) {
    width: 40%;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 85%;
  margin: auto;
  @media screen and (max-width: 991px) {
    padding: 10px;
  }
  @media screen and (max-width: 767px) {
    padding: 30px 10px 10px;
  }
`;
export const Image = styled.img`
  width: 35%;
`;
export const BorderContainer = styled.div`
  position: relative;
  &::after {
    position: absolute;
    height: 70px;
    width: 1px;
    top: -32px;
    right: -10px;
    background-color: #8f92a1;
    content: "";
  }
  @media screen and (max-width: 991px) {
    &::after {
      height: 45px;
      top: -22px;
      right: 5px;
    }
  }
`;

export const LinksItems = styled.div`
  padding: 30px 15px 0;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    background-color: #e2e5f0;
    width: 90%;
    height: 2px;
    margin: 30px auto 0;
  }
`;
export const One = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinksItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
