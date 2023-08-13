import React from "react";
import {
    NavContainer,
    LogoWrapper,
    Container,
    Title,
    FormContainer,
    IconContainer,
    LeftItems,
    InputItem,
} from "./Styled";
import { SearchRounded, SettingsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <NavContainer>
            <Container>
                <LogoWrapper>
                    <Title>
                        <Link to="/" className="nav-link">الرئيسية</Link>
                    </Title>
                </LogoWrapper>
                <LeftItems>
                    <FormContainer>
                        <SearchRounded
                            style={{
                                padding: "0 10px",
                                minWidth: "50px",
                                backgroundColor: "#f9f9fa",
                                height: "50px",
                                borderRadius: "5px",
                                borderTopLeftRadius: "0px",
                                borderBottomLeftRadius: "0px",
                                color: "#8f92a1",
                            }}
                        />
                        <InputItem
                            type="text"
                            placeholder="استعلام عن حالة مواليد او وفاة"
                        />
                    </FormContainer>
                    <IconContainer>
                        <SettingsOutlined style={{ color: "#8f92a1", fontSize: "50px" }} />
                    </IconContainer>
                </LeftItems>
            </Container>
        </NavContainer>
    );
};

export default Navbar;
