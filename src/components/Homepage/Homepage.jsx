import Menu from "../Menu/Menu"
import About from "../About/About"
import Header from "../Header/Header"
import Analysis from "../Analysis/Analysis"
import Data from "../Data/Data"
import SelectBox from "../SelectBox"
import { Headline } from "../TextBlock"
import styled from "styled-components"
import { useRef, useState } from "react"
import MapComponent from "../LeafletMapDataset1/LeafletMapGis2web"
import MapComponent2 from "../LeafletMapDataset2/LeafletMapGis2web"
import PopUp from "../PopUp/PopUp"

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
`

export default function Homepage() {

    // Refs to scroll to section (menu)
    const about = useRef(null)
    const map = useRef(null)
    const data = useRef(null)
    const analysis = useRef(null)

    const scrollToSection = (ref) => {
        console.log(ref)
        switch (ref) {
            case "about":
                about.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "map":
                map.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "data":
                data.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "analysis":
                analysis.current.scrollIntoView({ behavior: "smooth" });
                break;
            default:
                break;
        }
    }

    // States for render control
    const [mapState, setMapState] = useState("data1") // data1 od data2
    const [popUpState, setPopUpState] = useState(false)

    // Menu constants 
    const menuItems = ["about", "map", "data", "analysis"]
    const headerItems = ["LOGO", "i"]

    return (
        <>
            <HomeContainer>
                {popUpState && <PopUp />}
                <Header headerItems={headerItems} setPopUpState={setPopUpState} />
                <Menu menuItems={menuItems} scrollToSection={scrollToSection} />
                <div className="section" ref={about} >
                    <About />
                </div>
                <div ref={map}>
                    <Headline>MAPS</Headline>
                    <div style={{ alignItems: "flex-start" }}>
                        <SelectBox setMapState={setMapState} />
                    </div>
                </div>
                <div id="map" className="section">
                    {mapState === "data1" && <MapComponent />
                    }
                    {mapState === "data2" && <MapComponent2 />}
                </div>
                <div className="section" ref={data}>
                    <Data />
                </div>
                <div className="section" ref={analysis}>
                    <Analysis />
                </div>
            </HomeContainer>
        </>
    )
}