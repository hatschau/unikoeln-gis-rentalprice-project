import TextBlock from "../TextBlock/TextBlock"
import aboutText from "../texts/AboutText"

export default function About() {

    const headline = "ABOUT"

    return (
        <>
            <TextBlock headline={headline} textfield={aboutText} />
        </>
    )
}