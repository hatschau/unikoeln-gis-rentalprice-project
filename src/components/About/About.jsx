import TextBlock from "../TextBlock/TextBlock"
import { aboutText } from "../texts/Texts"

export default function About() {

    const headline = "ABOUT"

    return (
        <>
            <TextBlock headline={headline} textfield={aboutText} />
        </>
    )
}