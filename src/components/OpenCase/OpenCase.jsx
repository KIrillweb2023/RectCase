import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useRectCaseService } from "../../service/RectCaseService";
import { Loader } from "../SVG/Loader/Loader";
import { Title } from "../Title/Title";
import { CarouselOpenCase } from "../CarouselOpenCase/CarouselOpenCase";

import "./OpenCase.scss";


export const OpenCase = () => {
    const {caseID} = useParams()
    const [box, setBox] = useState(null) 
    const {loaded, getCase} = useRectCaseService()
    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        updateCase()
    }, [caseID])

    const updateCase = () => {
        getCase(caseID).then(res => setBox(res))
    };

    
    const loading = loaded ? <Loader/> : null;
    const contentCase = (!loading && box) ? <View box={box} state={setIsOpen}/> : loading;
    const carousel = (!loading && box && isOpen) ? <CarouselOpenCase box={box}/> : contentCase
    
    return (
        <>
            {carousel}
            {/* {contentCase} */}
          
        </>
    )
}

const View = ({box, state}) => {
    const {nameCase, imageCase, weaponsCase} = box

    return (
        <>
            <div className="opening__previuw" onClick={() => state(true)}>
                <img src={imageCase} alt="" />
                <h3 className="opening__previuw_title">{nameCase}</h3>
                <p className="opening__previuw_subtitle">НАЖМИТЕ ЧТОБЫ ОТКРЫТЬ!</p>
            </div>

            <Title text={"Содержимое контейнера"}/>

            <div className="weapons">
                {
                    weaponsCase.map((weapon) => {
                        const {childId, urlImageWeapon, nameWeapon, nameSkin, raritySkin} = weapon
                        return (
                            <div className="weapons_item" key={childId}>
                                <img className="weapons_item-image" src={urlImageWeapon} alt="" />
                                <h5 className="weapons_item-title">{nameWeapon}</h5>
                                <span className="weapons_item-skinName">{nameSkin}</span>
                                <div className="weapons_item-rarity" style={{"backgroundColor": `${raritySkin}`}}></div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


