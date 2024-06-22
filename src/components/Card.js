import {useState} from 'react';



function Card({id,image,info,price,name,removetour}){
   // read more ke option pe click krne pe show less bhi show kr rha hai 
   
   const [readmore,setReadmore] = useState(false);
   //ager read more wala option click hua hai to puri discription dikhao
   // nhi to 200 wali dikhao
    
   const discription = readmore ? info :`${info.substring(0,200)}....`
     function readmoreHanddler ()
     {
        //jab bhi me span ke uper click krunga to ager true hoga to false
        // ager false hoga to true bna dega
        setReadmore(!readmore);
     }

    

    return(
        <div className="card">
            <img src={image} className="image" alt="not found"></img>
            <div className="info">
                <div className="tour-details">
                   <h4 className="tour-price">₹ {price}</h4>
                   <h4 className="tour-name">{name}</h4>
                </div>
               <div className="discription">{discription}
                    <span className="read-more" onClick={readmoreHanddler}>{readmore?`show less`:`read more`}</span>
               </div>
               </div>
             <button className='btn-red' onClick={() => removetour(id)}>
                Not Interested
             </button>
        </div>
        
    );
}




export default Card;