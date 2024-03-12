import "./Carousel.css"
const Carousel = ({imageURL,heading,description})=>{
    return(
        <div className="carousel">
            <img src={imageURL} alt="" />
            <div className="overlay"></div>
            <div className="carousel-content">
                <div className="carousel-content-heading">
                    <h3>{heading}</h3>
                </div>
                <div className="carousel-content-description">
                    <p>
                      {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Carousel;