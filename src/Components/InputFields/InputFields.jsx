import React from "react";
import {
  Wrapper,
  Info,
  Items,
  Item,
  InfoTitle,
  InfoDate,
  InfoIcon,
  SpanDate,
  BoxContainer,
  Box,
  BoxSpan,
  BoxTitle,
  Main
} from "./Styled";
import { CalendarToday, KeyboardBackspace, Circle } from "@mui/icons-material";

const InputFields = () => {
  return (
    <Main>

    
      <Wrapper>
        <Info>
          <InfoTitle>الفترة: </InfoTitle>
          <InfoDate>
            <SpanDate>7/7/20022</SpanDate>
            <KeyboardBackspace
              style={{
                fontSize: "14px",
                marginRight: "10px",
                color: "#8f92a1",
                paddingTop: "5px",
              }}
            />
            <SpanDate>1/7/20022</SpanDate>
          </InfoDate>
          <InfoIcon>
            <CalendarToday
              style={{ fontSize: "18px", color: "#8f92a1", paddingTop: "5px" }}
            />
          </InfoIcon>
        </Info>
        <Items>
          <Item></Item>
        </Items>
      </Wrapper>


      
      <BoxContainer>
        <Box color="#e9f1f8">
          <BoxSpan color="#7d7d94">
            <Circle style={{ fontSize: "9px" }} />
          </BoxSpan>
          <BoxTitle>الكل</BoxTitle>
        </Box>
        <Box>
          <BoxSpan color="#ffc542">
            <Circle style={{ fontSize: "9px" }} />
          </BoxSpan>
          <BoxTitle>غير موثق</BoxTitle>
        </Box>
        <Box>
          <BoxSpan color="#3dd598">
            <Circle style={{ fontSize: "9px" }} />
          </BoxSpan>
          <BoxTitle>موثق</BoxTitle>
        </Box>
      </BoxContainer>
      </Main>
  );
};

export default InputFields;
