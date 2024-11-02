import { useSelector,useDispatch } from "react-redux";
import { removeItem,clearcart } from "./CartSlice";
import Menuitem from "./Menuitem";
const Cart=()=>{
    const items=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    console.log(items)  
    const handleclearcart=()=>{
        dispatch(clearcart())
    }  
    
    
   
    return(
        <div>
            
            <div style={{textAlign:'center'}}>
            <h1 ><b>Cart</b></h1>
            <button onClick={handleclearcart}>Clearcart</button>
            </div>
            {items.length==0 &&<h1>there is no items in the cart place go to home page and select items </h1>}
            <div>
                <Menuitem items={items}/>
            </div>
        </div>
    )
}
export default Cart;