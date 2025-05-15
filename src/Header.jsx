import { useEffect, useState } from "react"

const Header = () => {

    const [numDots, setNumDots] = useState(null)
    const [textid, setTextId] = useState(0)

    const skills = [
        'Desarrollo Full-Stack',
        'Desarrolo React.js',
        'Desarrollo y Entrenamiento de IAs',
        'Desarrollo módulos para Odoo ERP'
    ]

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
                    <h2 className="cursor typing">{skills[textid]}</h2>
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