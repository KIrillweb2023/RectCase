import { useState } from "react"
import { Title } from "../Title/Title"
import "./Inventory.scss"
import { InventNotCards } from "../InventNotCards/InventNotCards"

export const Inventory = () => {
    const [weaponRest, setWeaponRest] = useState([])

    return (
        <>
           <section className="inventory">
                <div className="container">
                    <Title text={"Мой инвентарь"}/>

                    <div className="inventory__wrapper">
                        {
                            weaponRest ? <InventNotCards/> : null
                        }


                       
                    </div>
                </div>
           </section>
        </>
    )
}