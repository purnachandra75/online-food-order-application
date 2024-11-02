import { useDispatch } from "react-redux";
import { additem } from "./CartSlice";
import { useSelector } from "react-redux";
const Menuitem =({items}) =>{
    console.log('items:',items)
    const dispatch=useDispatch()
    const handlieadd=(item)=>{
        dispatch(additem(item))
        console.log()
    }
    const cartitems=useSelector((store)=>store.cart.items)
   
    return(
        <>
            {items.map((item)=>(
                <div key={item?.card?.info?.id} className="menuitem">
                    <div>
                     <h3>{item?.card?.info?.name}</h3>
                     <h4>Rs.{(item?.card?.info?.price / 100).toFixed(2)}</h4>
                     <h6>{item?.card?.info?.description}</h6>
                     </div>
                     <div >
                     <button onClick={()=>handlieadd(item)} className="additem">Add+</button>
                        <img style={{width: '100px', height: '100px'}} src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+item?.card?.info?.imageId} />
                        
                    </div>
                </div>
                
            ))}
        </>
    )
}
export default Menuitem;