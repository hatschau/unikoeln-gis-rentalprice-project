import TextBlock from "../TextBlock/TextBlock"

export default function About() {

    const headline = "ABOUT"
    const textfield = "Hier kommt ein super toller Text über unser Projekt. Mietpreise blablabla. Uni Projekt blablabla. Noch ein super Absatz über irgendwas mit Daten und Karten und so."

    return (
        <>
            <TextBlock headline={headline} textfield={textfield} />
        </>
    )
}