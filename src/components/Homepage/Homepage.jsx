import Menu from "../Menu/Menu"
import About from "../About/About"
import Header from "../Header/Header"
import Analysis from "../Analysis/Analysis"
import Data from "../Data/Data"
import LeafletMap_Placeholder from "../LeafletMap_Placeholder/LeafletMap_Placeholder"
import SelectBox from "../SelectBox"
import { Headline } from "../TextBlock"
import styled from "styled-components"
import { useRef, useState } from "react"
import MapComponent from "../LeafletMapGis2web/LeafletMapGis2web"

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
`

export default function Homepage() {
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

    const [mapState, setMapState] = useState("data1") // data1, data2 or compare

    const menuItems = ["about", "map", "data", "analysis"]
    const headerItems = ["LOGO", "i"]

    console.log("mapState", mapState)

    return (
        <>
            <HomeContainer>
                <Header headerItems={headerItems} />
                <Menu menuItems={menuItems} scrollToSection={scrollToSection} />
                <div className="section" ref={about} >
                    <About />
                </div>

                <div id="map" className="section" ref={map}>
                    <Headline>MAPS</Headline>
                    <div style={{ alignItems: "flex-start" }}>
                        <SelectBox setMapState={setMapState} />
                    </div>

                    {mapState === "data1" && <MapComponent />
                    }
                    {mapState === "data2" && <LeafletMap_Placeholder />}
                    {mapState === "compare" && <LeafletMap_Placeholder />}

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