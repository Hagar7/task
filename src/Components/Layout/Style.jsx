import { styled } from "styled-components";

export const MainContainer = styled.section`
  display: flex;
`;

export const PageContent = styled.main`
  width: 84%;
  right: 16%;
  position: relative;
  left: 0;
  @media screen and (max-width:991px) {
    width: 60%;
    right: 40%;
}
`;
