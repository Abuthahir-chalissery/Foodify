
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = (props) => {
    // const [showItems , setShowItems] = useState(true)
        
    const [showItems, setShowItems ] = useState(true)
    const {title} = props.category
    const {itemCards} = props.category

    const itemCount = itemCards.length;
    

    const handleClick = () => {
        if (showItems == true){
            setShowItems(false)
        }
        else{
            setShowItems(true)
        }
        
    }

    return (
        <>
            <div className="w-full h-auto  rounded-md ">
                <div className="flex justify-between p-1 cursor-pointer" onClick={handleClick}>
                    <h1 className=" font-bold p-1 rounded-md ">{title}({itemCount})</h1>
                    <button><img className="size-5 " src="/src/assets/down.png" alt="" /></button>
                </div>
                
                {/* Accordion */}

                {showItems ? <ItemList items={itemCards}/>: <h1></h1>}
                <div className="w-full h-3.5 bg-gray-200"></div>
            </div>
        </>
    )
}


export default RestaurentCategory