const Project = ({ inverted = 0, img, children }) => {
    return (
        <div className="div-project-single">
            <img src={img} alt="Imagen proyecto"/>
            {children}
        </div>
    )
}

export default Project