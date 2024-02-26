import styled from 'styled-components'

const Textfield = styled.p`
`

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    background: #000000;
    margin: 10px;
    `

const Headline = styled.h2`
    color: #ffffff;
    `

export default function TextBlock({ headline, textfield }) {
    return (
        <>
            <AboutContainer>
                <Headline>{headline}</Headline>
                <Textfield>{textfield}</Textfield>
            </ AboutContainer>
        </>
    )

}