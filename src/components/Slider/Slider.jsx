import "./Slider.scss";
import { useEffect } from "react";
import { SliderApi } from "../SliderApi/SliderApi";

export const Slider = () => {
    const { 
        _variables, 
        _stylesSlider, 
        tabTransformNext, 
        tabTransformPrev, 
        dottesAddClassActive,
        state,
        slideNext,
        slidePrev,
        dotted,
        slide
    } = SliderApi()
    

    useEffect(() => {
        const {slideField} = _variables()
        _stylesSlider(_variables())
        dottesAddClassActive(state.slideIndex, _variables())

        slideField.style.transform = `translateX(-${state.offset}px)`;
    }, [state.offset, state.slideIndex])


    return (
        <>
            <div className="slider">
                <div className="container">
                    <div className="slider__wrapper">
                        <div className="slider-tab slider__prev" ref={slidePrev} onClick={() => tabTransformPrev(_variables())}>
                            <img src="/arrow-left.svg" alt="" />
                        </div>
                        <div className="slider-tab slider__next" ref={slideNext} onClick={() => tabTransformNext(_variables())}>
                            <img src="/arrow-right.svg" alt="" />
                        </div>

                        <div className="slider__dotted" ref={dotted}>
                            <span className="active-tab"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                
                        <div className="slider__container" ref={slide}>
                            <div className="slider__content">
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