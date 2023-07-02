import "./index.css";
import SiteImages from "../../assets/images";
import React from "react";

const Slider = ({
    img1,
    img2,
    img3,
    img4
}) => {
    // let slides = document.querySelectorAll('.slideshow__slide');
    // let controlDots = document.querySelectorAll('.slideshow__dot');
    
    /* let slides = React.createRef();
    let controlDots = React.createRef();
    let currentSlideIndex = 1;

    let styleWhenOn = {
        display: 'block'
    }
    let styleWhenOff = {
        display: 'none'
    }

    showSlide(currentSlideIndex);

    function showSlide(nextSlideIndex) {
        // контроль переменной
        if (nextSlideIndex > slides.length) nextSlideIndex = 1;
        if (nextSlideIndex < 1) nextSlideIndex = slides.length;

        // сама функция
        for (let i = 0; i < slides.length; i++) {
            slides[i].style = styleWhenOff;
        }
        for (let i = 0; i < controlDots.length; i++) {
            controlDots[i].classList.remove('active');
        }
        slides[nextSlideIndex - 1].style = styleWhenOn;
        controlDots[nextSlideIndex - 1].classList.add('active');
        currentSlideIndex = nextSlideIndex;
    }

    function nextSlide(next) {
        let nextSlideIndex = next ? (currentSlideIndex + 1) : (currentSlideIndex - 1);
        showSlide(nextSlideIndex);
    } */

    function SetStyle() {
        let slides = React.createRef();
        let controlDots = React.createRef();
    }
    return (
        /* <!-- Контейнер для слайдов --> */
    <div className="slideshow__container">
        <div className="slideshow">
           {/*  <!-- Слайды --> */}
            <div className="slideshow__slide fade" ref={slides}>
                <div className="slideshow__numberText"> 1 / 4</div>
                <img className="slidershow__img" src={SiteImages[img1]}></img>
                <div className="slideshow__textSign">Slide One</div>
            </div>
    
            <div className="slideshow__slide fade" ref={slides}>
                <div className="slideshow__numberText"> 1 / 4</div>
                <img className="slidershow__img" src={SiteImages[img2]}></img>
                <div className="slideshow__textSign">Slide Two</div>
            </div>
    
            <div className="slideshow__slide fade" ref={slides}>
                <div className="slideshow__numberText"> 1 / 4</div>
                <img className="slidershow__img" src={SiteImages[img3]}></img>
                <div className="slideshow__textSign">Slide Three</div>
            </div>
    
            <div className="slideshow__slide fade" ref={slides}>
                <div className="slideshow__numberText"> 1 / 4</div>
                <img className="slidershow__img" src={SiteImages[img4]}></img>
                <div className="slideshow__textSign">Slide Four</div>
            </div>
    
            {/* <!-- кнопки перемещения --> */}
            <a className="slideshow__buttonPrev" onClick={nextSlide(false)}>&#10094;</a>
            <a className="slideshow__buttonNext" onClick={nextSlide(true)}>&#10095;</a>
        </div>
        {/* <!-- точки под слайдером --> */}
        <div className="slideshow__dotsUnderSlider">
            <span className="slideshow__dot" onClick={showSlide(1)} ref={controlDots}></span>
            <span className="slideshow__dot" onClick={showSlide(3)} ref={controlDots}></span>
            <span className="slideshow__dot" onClick={showSlide(4)} ref={controlDots}></span>
        </div>
    </div>

    );
}

export default Slider;