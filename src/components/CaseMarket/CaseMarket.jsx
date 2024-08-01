import { useEffect, useState } from "react";
import { useRectCaseService } from "../../service/RectCaseService";
import "./CaseMarket.scss";
import { CaseMarketItem } from "../CaseMarketItem/CaseMarketItem";

export const CaseMarket = () => {
    const [boxes, setBoxes] = useState([])
    const { getCases, getCase } = useRectCaseService();


    const onRequest = () => {
        getCases().then(res => {
            setBoxes(res)
        }).catch((err) => {
            console.log(err)
        })
    }



    useEffect(() => {
        onRequest()
    }, [])

    return (
        <>
            <div className="case">
                <div className="container">
                    <ul className="case__list">
                        {
                            <CaseMarketItem boxes={boxes} getCase={getCase} />
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}