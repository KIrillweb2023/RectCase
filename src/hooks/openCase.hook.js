import { useRef, useState } from "react";


export const useOpenCase = () => {
    const carousel = useRef(null)
    const [carouselPosLeft, setCarouselPosLeft] = useState(1500)

    const _initCarousel = (stateCarousel, {carouselWrapper}) => {
        carouselWrapper.style.left = `${stateCarousel}px`;
    }

    const _variableCarousel = () => {
        const carouselWrapper = carousel.current;
        const caroselWrapperChilds = carouselWrapper.childNodes
        const carouselWrapperLength = carouselWrapper.childNodes.length - 3

        const _widthCarousel = parseInt(
            getComputedStyle(caroselWrapperChilds[0]).width) * caroselWrapperChilds.length + ((caroselWrapperChilds.length - 1) * 15 - 100
        )
       
        return {
            carouselWrapper,
            caroselWrapperChilds,
            _widthCarousel,
            carouselWrapperLength
        }
    }

    const startCarousel = ({carouselWrapper, caroselWrapperChilds, _widthCarousel, carouselWrapperLength}) => {
        carouselWrapper.style.left = `${setCarouselPosLeft((position) => position =  -_widthCarousel + 1110)}px`;
        setTimeout(() => {
            caroselWrapperChilds.forEach(item => {
                item.style.transform = "scale(0.8)";
            }) 
            caroselWrapperChilds[carouselWrapperLength].style.background = "#a8a8a863";
            caroselWrapperChilds[carouselWrapperLength].style.transform = "scale(1)";
        }, 4500)
    }




    return {
        carouselPosLeft, carousel,
        _initCarousel, _variableCarousel, startCarousel,
    }
}