import styled from "styled-components";
import header_cologne from "../../assets/header_cologne.jpeg"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const HeaderImage = styled.img`
width: 100%;
`

const ImageContainer = styled.div`
height: 350px;
overflow: hidden;
display: flex;
align-items: center;
`

const HeaderItem = styled.button`
width: 100%;
background: inherit;
`


const HeaderItemContainer = styled.div`
position: sticky;
display: flex;
width: 100%;
height: 3rem;
background: #000000;
z-index: 999;
`

const PopUpWindow = styled.div`
color: #000000`

export default function Header({ headerItems }) {

    return (<>

        <HeaderItemContainer>
            <HeaderItem>LOGO</HeaderItem>
            <Popup trigger={<HeaderItem> i</HeaderItem>} position="bottom center">
                <PopUpWindow>This Website is part of a project by students of University of Cologne. <br /> Project members: Helena Köster, Dario Loa, Niels Schreiner, Marc Werk <br /> Header Image by Council on Tall Buildings and Urban Habitat</PopUpWindow>
            </Popup>



        </HeaderItemContainer>
        <ImageContainer>
            <HeaderImage src={header_cologne} />
        </ImageContainer>

    </>)

}