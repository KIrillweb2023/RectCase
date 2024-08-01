import { Link } from "react-router-dom"

export const CaseMarketItem = ({boxes, getCase}) => {
    return (
        <>
            {  
                boxes.map(item => {
                    return (
                        <li className="case__list_item" key={item.id} onClick={() => getCase(item.id)}>
                            <Link to={`/OpenCase/${item.id}`} className="content-item">
                                <img src={item.imageCase} alt="" className="case__list_item-image" />
                                <h3 className="case__list_item-title">{item.nameCase}</h3>
                                <span className="case__list_item-keys">
                                    <img src="/key.svg" alt="" className="case__list_item-keys-img"/>
                                    <span className="case__list_item-keys-count">{item.buyKey}</span>
                                </span>
                            </Link>
                        </li>
                      
                    )
                })
            }
            
        </>
    )
}