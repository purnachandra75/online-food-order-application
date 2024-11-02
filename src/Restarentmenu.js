import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Menuitem from "./Menuitem";
const RestaurantMenu = () => {
    const { resid } = useParams();
    const [resmenu, setResmenu] = useState(null);
    const [itemstate,setItemstate]=useState(null)
    
    
    useEffect(() =>{
        fetchMenu();
    },[]);
    const fetchMenu = async () => {
        
            console.log('Fetching'); // Debugging log

            const response = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.49095862670509&lng=78.4017889354235&restaurantId=${resid}`
            );

            const data = await response.json(); // Parse JSON response
            console.log('Data:', data); // Debugging log for data
            
            const resdata=data?.data
            
            setResmenu(resdata);
           
    }   
    if(resmenu === null){
        return(<p>Loding.....</p>)
    }
    const itemCards=resmenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    // console.log(itemCards)
    // console.log(itemCards[0]?.card?.info?.name)
    const catagories=resmenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    c.card?.['card']?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    // console.log(catagories[0]?.card?.card?.itemCards)
    console.log('catagories:',catagories)
    const handlieclick=(title)=>{
        console.log(title)
        setItemstate(title)
    }
    
    const info=resmenu?.cards[2]?.card?.card?.info
    return (
        <div className="resmenu">
            <div>
            <div>
            <h1>Restaurant Menu</h1>
            <h1>{info?.name}</h1>
            </div>
            <img style={{ width: '100px', height: '100px' }} src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+info?.cloudinaryImageId} />
            </div>
            {catagories.map((catagorie)=>(
                 
                <div key={catagorie?.card?.card?.title}>
                <button className="restartmenu" onClick={
                    ()=>{handlieclick(catagorie?.card?.card?.title)

                    }}>{catagorie?.card?.card?.title}(<b>{catagorie?.card?.card?.itemCards?.length}</b>)</button>
                    <br/>
                    {itemstate === catagorie?.card?.card?.title && (
                <Menuitem  items={catagorie?.card?.card?.itemCards}/>
                    )}
                
                </div>
                ))
            }
            
          
            
           
        </div>
    );
};

export default RestaurantMenu;
