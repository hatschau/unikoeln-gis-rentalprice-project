import Menu from "../Menu/Menu"
import About from "../About/About"
import Header from "../Header/Header"
import Analysis from "../Analysis/Analysis"
import Data from "../Data/Data"
import styled from "styled-components"
import L from 'leaflet'

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default function Homepage() {

    const menuItems = ["About", "Maps", "Data", "Analysis"]
    const headerItems = ["LOGO", "i"]

    return (
        <>
            <HomeContainer>
                <Header headerItems={headerItems} />
                <Menu menuItems={menuItems} />
                <About />
                <div id="map">

                </div>
                <Data />
                <Analysis />
            </HomeContainer>
        </>
    )
}