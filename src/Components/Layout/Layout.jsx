import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import { MainContainer, PageContent } from './Style'

const Layout = () => {
    return (
        <>
            <MainContainer>
                <SideBar />
            
                <PageContent>
                    <Navbar />
                    <Outlet></Outlet>
                </PageContent>
            </MainContainer>
        </>
    )
}

export default Layout
