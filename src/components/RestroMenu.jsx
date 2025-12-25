import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import { MENU_IMG_URL } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestroMenu";

const RestroMenu = () => {

    const { resId } = useParams()
    
    const resInfo = useRestaurentMenu(resId)
    
    if (resInfo == null) return <Shimmer/>

    const {text} = resInfo?.cards[0]?.card?.card
    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
    
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

                        {itemCards.map(item => 
                            <div key={item.card.info.id} className="w-full h-auto flex flex-col gap-5">
                                <div className="wfull flex justify-between">
                                    <div className="flex flex-col justify-between max-w-150">
                                        <h1 className="text-lg font-semibold">{item.card.info.name}</h1>
                                        <h1 className="font-semibold">₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</h1>
                                        <h1 className="text-sm font-bold text-green-500 flex items-center gap-1"><span><img className="size-4" src="/src/assets/greenstar.png" alt="" /></span>4.1</h1>
                                        <h1 className="text-sm font- text-gray-700">{item.card.info.description}</h1>
                                        
                                    </div>
                                    <div className="flex justify-center itec">
                                        <img className="size-35 rounded-xl object-cover" src={MENU_IMG_URL+item.card.info.imageId} alt="" />
                                    </div>
                                </div>
                                <hr className="text-gray-400"/>
                            </div>
                        )}
                        
                        
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}


export default RestroMenu;