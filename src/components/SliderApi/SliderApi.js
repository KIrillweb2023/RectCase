import { useRef, useReducer } from "react"

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

export const SliderApi = () => {
    const slide = useRef(null)
    const slidePrev = useRef(null)
    const slideNext = useRef(null)
    const dotted = useRef(null)

    const [state, dispatch] = useReducer(reducer, initialState);

    const _variables = (refSlide = slide, refTabNext = slideNext, refTabPrev = slidePrev, refDotted = dotted) => {
        const slideField = refSlide.current.childNodes[0];
        const slidesWrapper = refSlide.current;
        const widthStatusSlide = window.getComputedStyle(slidesWrapper).width;
        const slides = refSlide.current.childNodes[0].childNodes;

        const nextTab = refTabNext.current;
        const prevTab = refTabPrev.current;

        const dottes = refDotted.current.childNodes

        const slideWidth = Math.ceil(+widthStatusSlide.slice(0, widthStatusSlide.length - 2));

        return {
            slideField,
            slidesWrapper,
            widthStatusSlide,
            slides,
            nextTab,
            prevTab,
            dottes,
            slideWidth
        }
    }

    const _stylesSlider = ({slideField, widthStatusSlide, slides, dottes}) => {
        slideField.style.width = 100 * slides.length + "%";
        slides.forEach(slide => slide.style.width = widthStatusSlide)
        dottes.forEach(dott => dott.classList.remove('active-tab'))
    }

    const tabTransformNext = ({slides, slideWidth}) => {
        const newOffset = state.offset === slideWidth * (slides.length - 1) ? 0 : state.offset + slideWidth;
        const newSlideIndex = state.slideIndex === slides.length ? 1 : state.slideIndex + 1;

        dispatch({ type: 'NEXT_SLIDE', offset: newOffset, slideIndex: newSlideIndex });
    }

    const tabTransformPrev = ({slides, slideWidth}) => {
        const newOffset = state.offset <= 0 ? slideWidth * (slides.length - 1) : state.offset - slideWidth;
        const newSlideIndex = state.slideIndex === 1 ? slides.length : state.slideIndex - 1;

        dispatch({ type: 'PREV_SLIDE', offset: newOffset, slideIndex: newSlideIndex });
    }

    const dottesAddClassActive = (index, {dottes}) => dottes[index - 1].classList.add("active-tab")


    return { 
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
    }
}