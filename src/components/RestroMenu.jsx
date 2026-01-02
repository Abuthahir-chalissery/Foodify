import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import { MENU_IMG_URL } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestroMenu";
import RestaurentCategory from "./RestaurentCategory";

const RestroMenu = () => {

    const { resId } = useParams()
    
    const resInfo = useRestaurentMenu(resId)

    
    if (resInfo == null) return <Shimmer/>

    const {text} = resInfo?.cards[0]?.card?.card
    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    
    
    
    
    
    return  (
        <>
        <div className="w-full h-auto  flex justify-center">
            <div className="Restaurent-Menu w-full h-auto   flex flex-col max-w-200   gap-3 ">
                <h1 className="text-3xl font-bold">{text}</h1>
                <div className=" h-auto mt-6 flex  gap-5">
                    <div>
                        <h1 className=" font-semibold cursor-pointer" >Online Order</h1>
                        <h1 className="w-full h-1 rounded-3xl bg-red-500"></h1>
                    </div>
                    <div>
                        <h1 className=" font-semibold hover:cursor-no-drop">Dinout</h1>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-between gap-10">
                    <h1 className="w-full text-center h-10 flex justify-center items-center rounded-xl bg-gray-200  text-lg text-gray-800  ">- menu  -</h1>
                    <ul className="w-full flex flex-col gap-5 ">

                    {categories.map((category ) => 
                    <RestaurentCategory key={category.card.card.categoryId} category= {category?.card?.card}  />)}

                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}





export default RestroMenu;


