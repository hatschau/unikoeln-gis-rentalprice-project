import TextBlock from "../TextBlock/TextBlock"
import analysisText from "../texts/analysisText"

export default function Analysis() {

    const headline = "ANALYSIS"

    return (
        <>
            <TextBlock headline={headline} textfield={analysisText} />
        </>
    )
}