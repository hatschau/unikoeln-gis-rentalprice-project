import styled from 'styled-components'

const Textfield = styled.p``

const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    background: #000000;
    margin: 10px;
    `

export default function About() {

    return (
        <>
            <AboutContainer>
                <Textfield>Hier kommt ein super toller Text über unser Projekt. Mietpreise blablabla. Uni Projekt blablabla.<br />Noch ein super Absatz über irgendwas mit Daten und Karten und so.</Textfield>
            </AboutContainer>
        </>
    )
}