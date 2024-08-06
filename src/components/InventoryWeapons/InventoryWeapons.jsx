export const InventoryWeapons = ({weapons}) => {
    return (
       <>
            {
                weapons.map(weapon => {
                    return (
                        <div className="inventory__item" key={weapon.childId}>
                            <img className="inventory__item_image" src={weapon.urlImageWeapon} alt="" />
                            <h5 className="inventory__item_title">{weapon.nameWeapon}</h5>
                            <span className="inventory__item_skinName">{weapon.nameSkin}</span>
                            <div className="inventory__item_rarity" style={
                                {"backgroundColor": `${weapon.raritySkin}`, "boxShadow": `0 0 20px ${weapon.raritySkin}`}}>
                            </div>
                        </div>
                    )
                })
            }
       </>
    )
}