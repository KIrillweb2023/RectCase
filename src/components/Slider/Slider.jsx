import { useReducer, useRef, useEffect } from "react";
import "./Slider.scss";

const initialState = {
    offset: 0,
    slideIndex: 1
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'NEXT_SLIDE':
            return {
                ...state,
                offset: action.offset,
                slideIndex: action.slideIndex
            };
        case 'PREV_SLIDE':
            return {
                ...state,
                offset: action.offset,
                slideIndex: action.slideIndex
            };
        default:
            return state;
    }
};

export const Slider = () => {
    const slide = useRef(null);
    const slidePrev = useRef(null);
    const slideNext = useRef(null);
    const dotted = useRef(null);

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const { slideField, slidesWrapper, widthStatusSlide, slides, dottes } = _variables();

        _stylesSlider();
        _widthFixSlides();
        dottesRemoveClassActive();
        dottesAddClassActive(state.slideIndex);

        slideField.style.transform = `translateX(-${state.offset}px)`;

    }, [state.offset, state.slideIndex]);

    const _variables = () => {
        const slideField = slide.current.childNodes[0];
        const slidesWrapper = slide.current;
        const widthStatusSlide = window.getComputedStyle(slidesWrapper).width;
        const slides = slide.current.childNodes[0].childNodes;
        const dottes = dotted.current.childNodes;

        return {
            slideField,
            slidesWrapper,
            widthStatusSlide,
            slides,
            dottes
        };
    };

    const _stylesSlider = () => {
        const { slideField, slidesWrapper, slides } = _variables();

        slideField.style.width = 100 * slides.length + "%";
        slideField.style.display = "flex";
        slideField.style.columnGap = "10px";
        slideField.style.transition = "0.5s all";
        slidesWrapper.style.overflow = "hidden";
    };

    const _widthFixSlides = () => {
        const { slides, widthStatusSlide } = _variables();

        slides.forEach((slide) => {
            slide.style.width = widthStatusSlide;
        });
    };

    const tabTransformNext = () => {
        const { slides, widthStatusSlide } = _variables();
        const slideWidth = Math.ceil(+widthStatusSlide.slice(0, widthStatusSlide.length - 2));

        const newOffset = state.offset === slideWidth * (slides.length - 1) ? 0 : state.offset + slideWidth;
        const newSlideIndex = state.slideIndex === slides.length ? 1 : state.slideIndex + 1;

        dispatch({ type: 'NEXT_SLIDE', offset: newOffset, slideIndex: newSlideIndex });
    };

    const tabTransformPrev = () => {
        const { slides, widthStatusSlide } = _variables();
        const slideWidth = Math.ceil(+widthStatusSlide.slice(0, widthStatusSlide.length - 2));

        const newOffset = state.offset <= 0 ? slideWidth * (slides.length - 1) : state.offset - slideWidth;
        const newSlideIndex = state.slideIndex === 1 ? slides.length : state.slideIndex - 1;

        dispatch({ type: 'PREV_SLIDE', offset: newOffset, slideIndex: newSlideIndex });
    };

    const dottesRemoveClassActive = () => {
        const { dottes } = _variables();

        dottes.forEach((dott) => {
            dott.classList.remove('active-tab');
        });
    };

    const dottesAddClassActive = (index) => {
        const { dottes } = _variables();
        dottes[index - 1].classList.add("active-tab");
    };

    return (
        <>
            <div className="slider">
                <div className="container">
                    <div className="slider__wrapper">
                        <div className="slider-tab slider__prev" ref={slidePrev} onClick={tabTransformPrev}>
                            <img src="/arrow-left.svg" alt="Previous" />
                        </div>
                        <div className="slider-tab slider__next" ref={slideNext} onClick={tabTransformNext}>
                            <img src="/arrow-right.svg" alt="Next" />
                        </div>

                        <div className="slider__dotted" ref={dotted}>
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
    );
};