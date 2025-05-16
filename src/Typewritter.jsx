import { useEffect, useRef, useState } from "react"

const TypeWritter = () => {

    const [textoActual, setTextoActual] = useState('')
    const indexRef = useRef(0)

    const skills = [
        'Desarrollo Full-Stack',
        'Desarrolo React.js',
        'Desarrollo y Entrenamiento de IAs',
        'Desarrollo módulos para Odoo ERP'
    ]

    useEffect(() => {

        let timeoutId

        const escribir = (texto, i = 0) => {
            if (i <= texto.length) {
                setTextoActual(texto.slice(0, i))
                timeoutId = setTimeout(() => escribir(texto, i + 1), 80) // velocidad de escritura
            } else {
                timeoutId = setTimeout(() => borrar(texto), 2000) // espera antes de borrar
            }
        }

        const borrar = (texto, i = texto.length) => {
            if (i >= 0) {
                setTextoActual(texto.slice(0, i))
                timeoutId = setTimeout(() => borrar(texto, i - 1), 40) // velocidad de borrado
            } else {
                indexRef.current = (indexRef.current + 1) % skills.length
                timeoutId = setTimeout(() => escribir(skills[indexRef.current]), 500) // espera antes de escribir lo siguiente
            }
        }

        setTimeout(() => {
            escribir(skills[indexRef.current])
        }, 2000)
        return () => clearTimeout(timeoutId)

    }, [])

    return (
        <h2 className='typewritter'>{textoActual}</h2>
    )
}

export default TypeWritter