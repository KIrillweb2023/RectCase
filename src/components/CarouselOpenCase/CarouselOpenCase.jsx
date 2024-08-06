import { useEffect } from "react";
import "./CarouselOpenCase.scss";
import {useOpenCase} from "../../hooks/openCase.hook"
import { useHttp } from "../../hooks/http.hook";
import { Title } from "../Title/Title";

export const CarouselOpenCase = ({box}) => {
    const {request} = useHttp()
    const { 
        carouselPosLeft,
        carousel,
        _initCarousel, 
        _variableCarousel, 
        startCarousel,
    } = useOpenCase()
    const {weaponsCase} = box
  
    
    useEffect(() => {
        shufleWeapons(weaponsCase)
        _initCarousel(carouselPosLeft, _variableCarousel());
        startCarousel(_variableCarousel())

        const {caroselWrapperChilds, carouselWrapperLength} = _variableCarousel();

        const fetchInv = setTimeout(() => {
            weaponsCase.filter(item => {
                if(item.nameWeapon === caroselWrapperChilds[carouselWrapperLength].childNodes[1].textContent) {
                    fetchInventory(item)
                }
            })
        }, 4500)

        return () => {
            clearTimeout(fetchInv)
        }
    }, [carouselPosLeft])

    const fetchInventory = async (datas) => {
        const response = await fetch("https://7eff46a25730df3d.mokky.dev/inventory", {
            method: "POST",
            body: JSON.stringify(datas),
            headers: {'Content-Type' : 'application/json'}
        })

        const data = await response.json();
        return data
    }
    
    const shufleWeapons = (arr) => {
        return arr.sort(() => Math.random() - 0.5)
    }

    return (
        <>
            <Title text={"Открытие кейса..."}/>
            <div className="opening__carousel">
            <div className="opening__carousel_chets"></div>
                <div className="opening__container" ref={carousel}>
                
                    {
                        weaponsCase.map((weapon) => {
                            return (
                                <div className="opening__carousel_item" key={weapon.childId}>
                                    <img className="opening__carousel_item-image" src={weapon.urlImageWeapon} alt="" />
                                    <h5 className="opening__carousel_item-title">{weapon.nameWeapon}</h5>
                                    <span className="opening__carousel_item-skinName">{weapon.nameSkin}</span>
                                    <div className="opening__carousel_item-rarity" style={
                                        {"backgroundColor": `${weapon.raritySkin}`, "boxShadow": `0 0 20px ${weapon.raritySkin}`}
                                    
                                        }>

                                        </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}