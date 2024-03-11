import TextBlock from "../TextBlock/TextBlock"
import styled from 'styled-components'
import Dataset_StadtKoeln_Mietpreisprojekt from "./dataForDownload/Dataset_StadtKoeln_Mietpreisprojekt.zip"

const DataDownloadContainer = styled.div`
display: flex;
justify-content: space-between;
`
export default function Data() {
    const headline = "Data"
    const textfield = "Text zu Daten lalalala"

    return (
        <>
            <TextBlock headline={headline} textfield={textfield} />
            <DataDownloadContainer>
                <a href={Dataset_StadtKoeln_Mietpreisprojekt} download>
                    <button>Download Dataset 1</button>
                </a>
                <button>Download Dataset 2</button>
            </DataDownloadContainer>
        </>
    )
}