import TextBlock from "../TextBlock/TextBlock"
import styled from 'styled-components'

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
                <button>Download Dataset 1</button>
                <button>Download Dataset 2</button>
            </DataDownloadContainer>
        </>
    )
}