const Restruncard= (props)=>{
    const data=props?.restarent?.info
    
    
   
    
    return(
        <div className='rest_card' >
                <img className='imgs' alt='resturent' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+data.cloudinaryImageId}/>
                <h4>{data.name}</h4>
                <h5>{data.cuisines.join(', ')}</h5>  
                <h6>{data.costForTwo}</h6> 
    </div>
    )
    
}
export default Restruncard;