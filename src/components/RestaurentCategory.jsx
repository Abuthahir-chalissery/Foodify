
import { MENU_IMG_URL } from "../utils/constants";

const RestaurentCategory = (props) => {
    console.log(props);
    
    const {title} = props.category
    const {itemCards} = props.category
    console.log(itemCards);
    
    // const {itemCards} = props.category
    return (
        <>
            <div className="w-full h-auto  bg-slate-100  rounded-md border border-gray-200">
                <div className="flex justify-between p-1">
                    <h1 className="text-lg text-white p-1 rounded-md bg-black ">{title}</h1>
                    <button><img className="size-5 " src="/src/assets/down.png" alt="" /></button>
                </div>
                {/* Accordion */}
                
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
                
            </div>
        </>
    )
}


export default RestaurentCategory