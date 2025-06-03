import { useEffect, useState } from "react";

const BotonTop = () => {

    const [visible, setVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 600);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <button className="back-to-top normal" onClick={scrollToTop}>
            ↑ Inicio
        </button>
    )
}

export default BotonTop