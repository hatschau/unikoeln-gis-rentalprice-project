import styled from "styled-components";
import Menu from "../Menu/Menu";
import header_cologne from "../../assets/header_cologne.jpeg"

const HeaderImage = styled.img`
width: 100%;
`

const ImageContainer = styled.div`
height: 350px;
overflow: hidden;
display: flex;
align-items: center;
`

export default function Header({ headerItems }) {

    const styleprops = {
        background: "#ffffff"
    }

    return (<>
        <Menu menuItems={headerItems} styleprops={styleprops} />
        <ImageContainer>
            <HeaderImage src={header_cologne} />
        </ImageContainer>

    </>)

}