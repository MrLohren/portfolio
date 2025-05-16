import { useEffect, useState } from "react"
import TypeWritter from "./Typewritter"

const Header = () => {

    const [numDots, setNumDots] = useState(null)

    useEffect(() => {
        const spanWidth = 15
        const headerWidth = window.innerWidth
        setNumDots(Math.floor(headerWidth / spanWidth))
    }, [])

    return (
        <div className="div-header">

            <div className="wave-container">

                <div className="div-title">
                    <h1>Hola! Soy Felipe Lagos, y hago</h1>
                    <TypeWritter />
                </div>

                {Array.from({ length: numDots }).map((_, i) => (
                    <span key={i} style={{ "--i": 10 + Math.floor(Math.random() * 50) }} />
                ))}
            </div>

            <div className="div-profilepic" />

        </div>
    )
}

export default Header