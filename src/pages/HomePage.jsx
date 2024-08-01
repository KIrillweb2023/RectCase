import { CaseMarket } from '../components/CaseMarket/CaseMarket'

import { Slider } from '../components/Slider/Slider'
import {Title} from "../components/Title/Title";

export const HomePage = () => {
    return (
        <>
            <Slider/>
            <Title text={"кейсы"}/>
            <CaseMarket/>
        </>
    )
}