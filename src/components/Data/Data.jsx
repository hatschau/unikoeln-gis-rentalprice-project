import TextBlock from "../TextBlock/TextBlock"
import styled from 'styled-components'
import Dataset_StadtKoeln_Mietpreisprojekt from "./dataForDownload/Dataset_StadtKoeln_Mietpreisprojekt.zip"
import Dataset_WB_StadteileMiete from "./dataForDownload/Dataset_WB_StadteileMiete.zip"
import { dataText } from "../texts/Texts"

const DataDownloadContainer = styled.div`
display: flex;
justify-content: space-between;
`
export default function Data() {
    const headline = "Data"

    return (
        <>
            <TextBlock headline={headline} textfield={dataText} />
            <DataDownloadContainer>
                <a href={Dataset_StadtKoeln_Mietpreisprojekt} download>
                    <button>Download Dataset 1</button>
                </a>
                <a href={Dataset_WB_StadteileMiete} download>
                    <button>Download Dataset 2</button>
                </a>
            </DataDownloadContainer>
        </>
    )
}