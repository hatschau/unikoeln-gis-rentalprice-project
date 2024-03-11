import styled from "styled-components"

const Select = styled.select`
margin: 5px;
font-size: 14pt;
padding: 3px;
`
export default function ({ setMapState }) {
    return (
        <Select onChange={(e) => setMapState(e.target.value)}>
            <option value="data1">Dataset 1</option>
            <option value="data2">Dataset 2</option>
        </Select>
    )
}