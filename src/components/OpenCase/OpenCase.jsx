import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OpenCase.scss";
import { useRectCaseService } from "../../service/RectCaseService";
import { Title } from "../Title/Title";
import { Loader } from "../SVG/Loader/Loader";


export const OpenCase = () => {
    const {caseID} = useParams()
    const [box, setBox] = useState(null) 
    const {loaded, getCase} = useRectCaseService()
    
    useEffect(() => {
        updateCase()
    }, [caseID])

    const updateCase = () => {
        getCase(caseID).then(onCaseLoad)
    }

    const onCaseLoad = (caseBox) => {
        setBox(caseBox)
    }

    const loading = loaded ? <Loader/> : null;
    const content = box ? <View caseBox={box}/> : loading
    
    return (
        <>
          <section className="opening">
              <div className="container">
                {/* {loading} */}
                {content}   
              </div>
          </section>
        </>
    )
}

const View = ({caseBox}) => {
    const {nameCase, imageCase} = caseBox

    return (
        <>
            <div className="opening__previuw">
               

                <img src={imageCase} alt="" />
               
                <h3 className="opening__previuw_title">{nameCase}</h3>
                <p className="opening__previuw_subtitle">НАЖМИТЕ ЧТОБЫ ОТКРЫТЬ!</p>
            </div>

            <Title text={"Может выпасть"}/>
            <ViewCaseWeaponBox caseBox={caseBox}/>
        </>
    )
}

const ViewCaseWeaponBox = ({caseBox}) => {
    const {weaponsCase} = caseBox

    return (
        <div className="opening__weapons">
            {
                weaponsCase.map((weapon) => {
                    return (
                        <div className="opening__weapons_item" key={weapon.childId}>
                            <img className="opening__weapons_item-image" src={weapon.urlImageWeapon} alt="" />
                            <h5 className="opening__weapons_item-title">{weapon.nameWeapon}</h5>
                            <span className="opening__weapons_item-skinName">{weapon.nameSkin}</span>
                            <div className="opening__weapons_item-rarity" style={{"backgroundColor": `${weapon.raritySkin}`}}></div>
                        </div>
                    )
                })
            }
        </div>
    )
}


