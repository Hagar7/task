import { styled } from "styled-components";

export const NavContainer = styled.header`
   width: 100%;
  padding: 10px 0;
  background-color: #ffffff;
  @media screen and (max-width:991px) {
    /* width: 40%;
    right: 37%; */
}
`;

export const Container = styled.nav`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`;
export const Title = styled.h2`
  margin: 0 10px;
  color: #34383a;
`;
export const LeftItems = styled.div`
  display: flex;
  align-items: center;
`;

export const FormContainer = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
export const InputItem = styled.input`
  display: flex;
  background-color: #f9f9fa;
  border: 1px solid transparent;
  height: 50px;
  width: 190px;
  border-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  &::placeholder {
    color: #8f92a1;
    font-size: 17px;
  }
`;

export const IconContainer = styled.div`
  margin: 0 10px;
  color: #34383a;
`;
