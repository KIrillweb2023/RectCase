import { useEffect, useState } from "react"
import { Title } from "../Title/Title"
import "./Inventory.scss"
import { InventNotCards } from "../InventNotCards/InventNotCards"
import { InventoryWeapons } from "../InventoryWeapons/InventoryWeapons"
import { Loader } from "../SVG/Loader/Loader";
import { useHttp } from "../../hooks/http.hook"

export const Inventory = () => {
    const {request, loaded} = useHttp();
    const [weapons, setWeapons] = useState([])


    useEffect(() => {
        onResultWeapon()
    }, [])

    const fetchWeapons = async () =>{
        const res = await request("https://7eff46a25730df3d.mokky.dev/inventory")
        return res
    } 
   
    const onResultWeapon = () => {
        fetchWeapons().then(res => setWeapons(res))
    }

    const loading = loaded ? <Loader/> : null;
    const contentCase = (!loading && weapons) ? <InventoryWeapons weapons={weapons}/> : loading;

    return (
        <>
           <section className="inventory">
                <div className="container">
                    <Title text={"Мой инвентарь"}/>

                    <div className="inventory__wrapper">
                        {contentCase}
                    </div>
                </div>
           </section>
        </>
    )
}