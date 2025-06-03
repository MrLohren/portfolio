const SocialCard = ({ image = null, children }) => {
    return (
        <div className="social-card-container">
            <div className="social-card-content">
                <img src={image} alt="" />
                {children}
            </div>
        </div>
    )
}

export default SocialCard