import React from "react";
import {
    MainCount,
    BoxContainer,
    Box,
    Icon,
    Info,
    Title,
    Description,
} from "./Styled";
import { Circle, RotateRight, TripOrigin } from "@mui/icons-material";

const Count = () => {


    return (
        <MainCount>
            <BoxContainer>
                <Box>
                    <Icon color="#32bea6">
                        <TripOrigin style={{ fontSize: "50px" }} />
                    </Icon>
                    <Info>
                        <Title>10,918</Title>
                        <Description>عدد المواطنين المداخلين</Description>
                    </Info>
                </Box>
                <Box>
                    <Icon color="#7d7d94">
                        <Circle style={{ fontSize: "50px" }} />
                    </Icon>
                    <Info>
                        <Title>20</Title>
                        <Description>عدد الوفيات المداخلين</Description>
                    </Info>
                </Box>
                <Box>
                    <Icon color="#fbd97d">
                        <RotateRight style={{ fontSize: "50px" }} />
                    </Icon>
                    <Info>
                        <Title>400</Title>
                        <Description>طلبات تعديل مقامة</Description>
                    </Info>
                </Box>
            </BoxContainer>
        </MainCount>
    );
};

export default Count;
