import { useState, useRef } from "react"

export const SliderApi = () => {
    const slide = useRef(null)
    const slidePrev = useRef(null)
    const slideNext = useRef(null)
    const dotted = useRef(null)

    const [offset, setOffset] = useState(0)
    const [slideIndex, setSlideIndex] = useState(1)

    const _variables = (refSlide = slide, refTabNext = slideNext, refTabPrev = slidePrev, refDotted = dotted) => {
        const slideField = refSlide.current.childNodes[0];
        const slidesWrapper = refSlide.current;
        const widthStatusSlide = window.getComputedStyle(slidesWrapper).width;
        const slides = refSlide.current.childNodes[0].childNodes;

        const nextTab = refTabNext.current;
        const prevTab = refTabPrev.current;

        const dottes = refDotted.current.childNodes

        return {
            slideField,
            slidesWrapper,
            widthStatusSlide,
            slides,
            nextTab,
            prevTab,
            dottes
        }
    }

    const _stylesSlider = ({slideField, slidesWrapper, slides}) => {
        slideField.style.width = 100 * slides.length + "%";
        slideField.style.display = "flex";
        slideField.style.columnGap = "10px"
        slideField.style.transition = "0.5s all";
        slidesWrapper.style.overflow = "hidden";
    }

    const _widthFixSlides = ({slides, widthStatusSlide}) => slides.forEach(slide => slide.style.width = widthStatusSlide);
    

    const tabTransformNext = ({slides, widthStatusSlide, slideField}) => {
        (offset == Math.ceil(+widthStatusSlide.slice(0, widthStatusSlide.length - 2) * (slides.length - 1))) 
        ? 
        setOffset(0)
        : 
        setOffset(index => {
            return index += Math.ceil(+widthStatusSlide.slice(0, widthStatusSlide.length - 2))
        })
          
        slideField.style.transform = `translateX(-${offset}px)`;
        slideIndex == slides.length ? setSlideIndex(1) : setSlideIndex(index => index += 1);  
    }

     

    const tabTransformPrev = ({slides, widthStatusSlide, slideField}) => {
        offset <= 0 ? 
        setOffset(index => index = Math.ceil(+widthStatusSlide.slice(0, widthStatusSlide.length - 2) * (slides.length - 1)))
        :
        setOffset(index => index -= Math.ceil(+widthStatusSlide.slice(0, widthStatusSlide.length - 2)))
        
        slideField.style.transform = `translateX(-${offset}px)`;
    
        slideIndex == 1 ? setSlideIndex(slides.length) : setSlideIndex(index => index -= 1);      
    }

    
    const dottesRemoveClassActive = ({dottes}) => dottes.forEach(dott => dott.classList.remove('active-tab'))
    const dottesAddClassActive = (index, {dottes}) => dottes[index - 1].classList.add("active-tab")


    return { 
        _variables, 
        _stylesSlider, 
        _widthFixSlides, 
        tabTransformNext, 
        tabTransformPrev, 
        dottesRemoveClassActive, 
        dottesAddClassActive, 
        offset,
        slideIndex,
        slideNext,
        slidePrev,
        dotted,
        slide
    }
}