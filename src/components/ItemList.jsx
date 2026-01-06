import { useDispatch } from "react-redux";
import { MENU_IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {


    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item))
        
        
    }


    return (
        <>  
        {items.map(item => 
            <div key={item.card.info.id} className="w-full h-auto flex flex-col gap-5 p-4 ">
                <div className="w-full flex flex-col-reverse gap-2 items-center sm:flex sm:flex-row justify-between">
                    <div className="flex flex-col justify-center gap-1 max-w-150">
                        <h1 className=" font-semibold text-gray-900">{item.card.info.name}</h1>
                        <h1 className="font-semibold text-gray-900">₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</h1>
                        <h1 className="text-sm font-bold text-green-500 flex items-center gap-1"><span><img className="size-4" src="/src/assets/greenstar.png" alt="" /></span>4.1</h1>
                        <h1 className="text-xs font- text-gray-700">{item.card.info.description}</h1>
                    </div>
                    <div className="max-w-50  flex justify-center flex-col  sm:items-center gap-1 sm:gap-0 relative">
                        <img className="max-w-50  sm:size-35 rounded-xl object-cover" src={MENU_IMG_URL+item.card.info.imageId} alt="" />
                        <button onClick={() => handleAddItem(item)} className="w-full  p-1 text-green-600 font-semibold sm:w-25 bg-white rounded-md sm:absolute  sm:top-30 border border-gray-300">ADD</button>
                    </div>
                </div>
                <hr className="text-gray-400"/>
            </div>
        )}
            
        </>
    )
}

export default ItemList;