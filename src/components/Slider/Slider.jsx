import { useState } from "react";
import "./Slider.scss";
import { useRef } from "react";
import { useEffect } from "react";

export const Slider = () => {
    const [index, setIndex] = useState(0)
    const slide = useRef(null)
    const slideTabs = useRef(null)

    const nextIndex = () => {
        index <= 2 ? setIndex(index => index + 1) : setIndex(index => index = 0)
    }

    const prevIndex = () => {
        index <= 0 ? setIndex(index => index = 3) : setIndex(index => index - 1)
    }

    const removeActiveSlide = () => {
        slide.current.childNodes.forEach((item) => {
            item.classList.remove("active-slide");
        })
        slideTabs.current.childNodes.forEach((item) => {
            item.classList.remove("active-tab");
        })

        
    }

    const addActiveSlide = () => {
        slide.current.childNodes[index].classList.add('active-slide') 
        slideTabs.current.childNodes[index].classList.add('active-tab') 
    }

    useEffect(() => {
        removeActiveSlide()
        addActiveSlide()
    }, [index])

    return (
        <>
            <div className="slider">
                <div className="container">
                    <div className="slider__wrapper">
                        <div className="slider-tab slider__prev" onClick={prevIndex}>
                            <img src="/arrow-left.svg" alt="" />
                        </div>
                        <div className="slider-tab slider__next" onClick={nextIndex}>
                            <img src="/arrow-right.svg" alt="" />
                        </div>

                        <div className="slider__dotted" ref={slideTabs}>
                            <span className="active-tab"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                
                        <div className="slider__container" ref={slide}>
                            <div className="slider__container_item active-slide">
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
        </>
    )
    
}