import { styled } from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxTitle = styled.div`
  color: #7d7d94;
  margin: 20px 0;
  font-size: 17px;
`;

export const BoxImage = styled.div`
  width: 100px;
  background: linear-gradient(
    to bottom,
    #dddddd 0%,
    #dddddd ${(props) => 100 - props.value}%,
    ${(props) => props.color} ${(props) => 100 - props.value + 1}%,
    ${(props) => props.color} 100%
  );
  -webkit-mask-image: url(${(props) => props.img});
  -webkit-mask-repeat: no-repeat;
  mask-image: url(${(props) => props.img});
  mask-repeat: no-repeat; 
`;
export const Image = styled.img`
visibility: hidden;
`




export const BoxPercentage = styled.span`
  margin: 20px 0;
  font-weight: bold;
`;
