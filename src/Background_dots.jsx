import { useEffect, useState } from "react"

const Background_dots = ({ upwards = 1 }) => {

    const [numDots, setNumDots] = useState(null)

    useEffect(() => {
        const spanWidth = 15
        const headerWidth = window.innerWidth
        setNumDots(Math.floor(headerWidth / spanWidth))
    }, [])

    return (
        <div className="dots_container">

            {Array.from({ length: numDots }).map((_, i) => (
                <span key={i} style={{ "--i": `${Math.floor(Math.random() * 100)}%` }} />
            ))}

        </div>
    )
}

export default Background_dots