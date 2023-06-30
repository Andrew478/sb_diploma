import "./index.css";
import SiteImages from "../../assets/images";

const Slider = ({
    img1,
    img2,
    img3,
    img4
}) => {
    return (
        /* <!-- Контейнер для слайдов --> */
    <div className="slideshow__container">
        <div className="slideshow">
           {/*  <!-- Слайды --> */}
            <div className="slideshow__slide fade">
                <div className="slideshow__numberText"> 1 / 4</div>
                <img className="slidershow__img" src={SiteImages[img1]}></img>
                <div className="slideshow__textSign">Slide One</div>
            </div>
    
            <div className="slideshow__slide fade">
                <div className="slideshow__numberText"> 1 / 4</div>
                <img className="slidershow__img" src={SiteImages[img2]}></img>
                <div className="slideshow__textSign">Slide Two</div>
            </div>
    
            <div className="slideshow__slide fade">
                <div className="slideshow__numberText"> 1 / 4</div>
                <img className="slidershow__img" src={SiteImages[img3]}></img>
                <div className="slideshow__textSign">Slide Three</div>
            </div>
    
            <div className="slideshow__slide fade">
                <div className="slideshow__numberText"> 1 / 4</div>
                <img className="slidershow__img" src={SiteImages[img4]}></img>
                <div className="slideshow__textSign">Slide Four</div>
            </div>
    
            {/* <!-- кнопки перемещения --> */}
            <a className="slideshow__buttonPrev" onclick="nextSlide(false)">&#10094;</a>
            <a className="slideshow__buttonNext" onclick="nextSlide(true)">&#10095;</a>
        </div>
        {/* <!-- точки под слайдером --> */}
        <div className="slideshow__dotsUnderSlider">
            <span className="slideshow__dot" onclick="showSlide(1)"></span>
            <span className="slideshow__dot" onclick="showSlide(2)"></span>
            <span className="slideshow__dot" onclick="showSlide(3)"></span>
            <span className="slideshow__dot" onclick="showSlide(4)"></span>
        </div>
    </div>

    );
}

export default Slider;