import React from 'react'
import { SideContainer, LogoWrapper, Image, BorderContainer, LinksItem, LinksItems, One } from './Styled'
import { Link } from 'react-router-dom'
import { ExpandLess, TripOrigin } from '@mui/icons-material'

const SideBar = () => {
  return (
    <SideContainer>
      <LogoWrapper>
        <Image src="images/2.png"></Image>
        <BorderContainer></BorderContainer>
        <Image src="images/1.png"></Image>
      </LogoWrapper>

      
      <LinksItems>
        <LinksItem>
          <One>
            <TripOrigin style={{ color: "#00726f", fontSize: "13px", marginTop: "20px" }} />
            <Link to="birth" className='nav-link'>المواليد</Link>
          </One>
          <ExpandLess style={{ marginTop: "20px" }} />
        </LinksItem>
        <LinksItem>
          <One>
            <Link to="birth" className='nav-link'>تسجيل واقعة ميلاد</Link>
          </One>
        </LinksItem>
        <LinksItem>
          <One>
            <Link to="birth" className='nav-link'>تسجيل ساقط قيد ميلاد</Link>
          </One>
        </LinksItem>
        <LinksItem>
          <One>
            <Link to="birth" className='nav-link'>تسجيل ميلاد (معثور عليه)  </Link>
          </One>
        </LinksItem>
        <LinksItem>
          <One>
            <Link to="birth" className='nav-link'>تسجيل ميلاد (ساقط قيد معثور عليه)  </Link>
          </One>
        </LinksItem>
        <LinksItem>
          <One>
            <Link to="birth" className='nav-link'>استعلام - تعديل واقعة ميلاد  </Link>
          </One>
        </LinksItem>
        <LinksItem>
          <One>
            <Link to="birth" className='nav-link'>طلب تعديل واقعة ميلاد  </Link>
          </One>
        </LinksItem>
      </LinksItems>
    </SideContainer>
  )
}

export default SideBar
