import { useState } from "react";
import "./Slider.scss";
import { useRef } from "react";
import { useEffect } from "react";

export const Slider = () => {
    const slide = useRef(null)

    const slidePrev = useRef(null)
    const slideNext = useRef(null)

    const [offset, setOffset] = useState(0)
    const [slideIndex, setSlideIndex] = useState(1)

    useEffect(() => {
        const {slideField, slidesWrapper, widthStatusSlide, slides, nextTab, prevTab} = _variables()


       
        _stylesSlider()
        _widthFixSlides()

         slideField.style.transform = `translateX(-${offset}px)`;
       
    }, [offset])

    const _variables = () => {
        const slideField = slide.current.childNodes[0];
        const slidesWrapper = slide.current;
        const widthStatusSlide = window.getComputedStyle(slidesWrapper).width;
        const slides = slide.current.childNodes[0].childNodes;

        const nextTab = slideNext.current;
        const prevTab = slidePrev.current;


        return {
            slideField,
            slidesWrapper,
            widthStatusSlide,
            slides,
            nextTab,
            prevTab
        }
    }
    
    const _stylesSlider = () => {
        const {slideField, slidesWrapper, slides} = _variables();

        slideField.style.width = 100 * slides.length + "%";
        slideField.style.display = "flex";
        slideField.style.transition = "0.5s all";
        slidesWrapper.style.overflow = "hidden";
    }

    const _widthFixSlides = () => {
        const {slides, widthStatusSlide} = _variables();

        slides.forEach((slide) => {
            slide.style.width = widthStatusSlide;
        });
    }

    const tabTransformNext = () => {
        const {slides, widthStatusSlide, slideField} = _variables();

        (offset == Math.ceil(+widthStatusSlide.slice(0, widthStatusSlide.length - 2) * (slides.length - 1))) 
        ? 
        setOffset(0)
        : 
        setOffset(index => {
            console.log(index)
            return index += Math.ceil(+widthStatusSlide.slice(0, widthStatusSlide.length - 2))
        })
          
        slideField.style.transform = `translateX(-${offset}px)`;
        // slideIndex == slides.length ?  setSlideIndex(1) : setSlideIndex(index => index += 1);  

    }

    const tabTransformPrev = () => {
        const {slides, widthStatusSlide, slideField} = _variables();

        offset <= 0 ? 
        setOffset(index => index = Math.ceil(+widthStatusSlide.slice(0, widthStatusSlide.length - 2) * (slides.length - 1)))
        :
        setOffset(index => index -= Math.ceil(+widthStatusSlide.slice(0, widthStatusSlide.length - 2)))
        
        slideField.style.transform = `translateX(-${offset}px)`;
    
        // slideIndex == 1 ? setSlideIndex(slides.length) : setSlideIndex(index => index -= 1);      

    }

    return (
        <>
            <div className="slider">
                <div className="container">
                    <div className="slider__wrapper">
                        <div className="slider-tab slider__prev" ref={slidePrev} onClick={() => tabTransformPrev()}>
                            <img src="/arrow-left.svg" alt="" />
                        </div>
                        <div className="slider-tab slider__next" ref={slideNext} onClick={() => tabTransformNext()}>
                            <img src="/arrow-right.svg" alt="" />
                        </div>

                        <div className="slider__dotted">
                            <span className="active-tab"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                
                        <div className="slider__container" ref={slide}>
                            <div className="slide__content">
                                <div className="slider__container_item">
                                    <img src="/slider/slide-one.png" alt="" className="slider__container_item-img" />
                                    <h2 className="slider__container_item-title">Открывайте кейсы и выбивайте из них уникальные предметы!</h2>
                                </div>
                                <div className="slider__container_item">
                                    <img src="/slider/slide-one.png" alt="" className="slider__container_item-img" />
                                    <h2 className="slider__container_item-title">Продавайте уникальные предметы, и получаете ключи на редкие кейсы</h2>
                                </div>
                                <div className="slider__container_item">
                                    <img src="/slider/slide-one.png" alt="" className="slider__container_item-img" />
                                    <h2 className="slider__container_item-title">Устраивайте аукцион и получайте редкие вещи!</h2>
                                </div>
                                <div className="slider__container_item">
                                    <img src="/slider/slide-one.png" alt="" className="slider__container_item-img" />
                                    <h2 className="slider__container_item-title">Соревнуйтесь с друзьями за редкие скины</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
    
}