import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestroMenu = () => {

    const [resInfo, setResInfo] = useState(null)

    const { resId } = useParams()
    

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId + "&submitAction=ENTER")
        const json = await data.json();
        setResInfo(json?.data)
        
    }
    
    if (resInfo == null) return <Shimmer/>

    const {text} = resInfo?.cards[0]?.card?.card
    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
    // console.log(name);
    // console.log(menu);
    
    
    

    return  (
        <div className="Restaurent-Menu w-full h-auto flex flex-col justify-center gap-5 bg-gray-400">
            <h1>{text}</h1>
            <ul>
                {itemCards.map(item => 
                <li key={item.card.info.id}>{item.card.info.name}</li> )}     
            </ul>
        </div>
    )
}


export default RestroMenu;